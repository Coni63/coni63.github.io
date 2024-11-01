import{$ as id,$a as vd,A as Ki,Aa as ld,B as fc,Ba as hd,C as pc,Ca as Si,D as Ji,Da as _o,E as Ku,Ea as Xt,F as es,Fa as wc,G as Kn,Ga as nr,H as mc,Ha as In,I as Ju,Ia as is,J as Qu,Ja as ud,K as ed,Ka as xo,L as td,La as Ec,M as hn,Ma as jt,N as Qi,Na as dd,O as Et,Oa as Mo,P as dt,Pa as So,Q as at,Qa as Ot,R as nd,Ra as bo,S as ft,Sa as rs,T as gc,Ta as ss,U as gt,Ua as wo,V as le,Va as fd,W as go,Wa as qt,X as ts,Xa as pd,Y as Wt,Ya as md,Z as er,Za as gd,_ as Cn,_a as Eo,a as re,aa as tr,ab as To,b as ct,ba as kt,bb as os,c as mi,ca as vo,cb as yd,d as Kr,da as rd,db as Tc,e as qu,ea as gi,eb as _d,f as fo,fa as vi,fb as as,g as Jr,ga as vc,gb as Ac,h as lc,ha as yi,hb as xd,i as hc,ia as yc,ib as Md,j as An,ja as Jn,jb as Sd,k as en,ka as sd,kb as bi,l as po,la as vt,lb as Qn,m as Zn,ma as _i,mb as Tt,n as tn,na as _c,nb as ir,o as Ne,oa as xi,ob as Rc,p as Qr,pa as od,pb as bd,q as $u,qa as xc,qb as wd,r as Yu,ra as ad,rb as At,s as ot,sa as Mi,sb as Ao,t as uc,ta as cd,tb as Cc,u as nn,ua as Mc,ub as Ed,v as Zu,va as Sc,vb as cs,w as dc,wa as ns,wb as Td,x as mo,xa as Pn,y as Rn,ya as yo,z as Zi,za as bc}from"./chunk-ALK5MRHP.js";var Co=class i{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),s=r.toLowerCase(),o=t.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.setHeaderEntries(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var Nd=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(Nd||{}),Pc=class{constructor(e,t=200,n="OK"){this.headers=e.headers||new Co,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var Po=class i extends Pc{constructor(e={}){super(e),this.type=Nd.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new i({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var Gm=new ft("");var Wm=new ft(""),Ad="b",Rd="h",Cd="s",Pd="st",Id="u",Dd="rt",Ro=new ft(""),Xm=["GET","HEAD"];function jm(i,e){let m=le(Ro),{isCacheActive:t}=m,n=mi(m,["isCacheActive"]),{transferCache:r,method:s}=i;if(!t||r===!1||s==="POST"&&!n.includePostRequests&&!r||s!=="POST"&&!Xm.includes(s)||!n.includeRequestsWithAuthHeaders&&qm(i)||n.filter?.(i)===!1)return e(i);let o=le(Sc),a=le(Wm,{optional:!0}),c=cs(le(Mi));if(a&&!c)throw new dt(2803,!1);let l=c&&a?Km(i.url,a):i.url,h=Ym(i,l),u=o.get(h,null),d=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(d=r.includeHeaders),u){let{[Ad]:v,[Dd]:x,[Rd]:f,[Cd]:p,[Pd]:b,[Id]:_}=u,E=v;switch(x){case"arraybuffer":E=new TextEncoder().encode(v).buffer;break;case"blob":E=new Blob([v]);break}let L=new Co(f);return Ne(new Po({body:E,headers:L,status:p,statusText:b,url:_}))}return e(i).pipe(Et(v=>{v instanceof Po&&c&&o.set(h,{[Ad]:v.body,[Rd]:$m(v.headers,d),[Cd]:v.status,[Pd]:v.statusText,[Id]:l,[Dd]:i.responseType})}))}function qm(i){return i.headers.has("authorization")||i.headers.has("proxy-authorization")}function $m(i,e){if(!e)return{};let t={};for(let n of e){let r=i.getAll(n);r!==null&&(t[n]=r)}return t}function Ld(i){return[...i.keys()].sort().map(e=>`${e}=${i.getAll(e)}`).join("&")}function Ym(i,e){let{params:t,method:n,responseType:r}=i,s=Ld(t),o=i.serializeBody();o instanceof URLSearchParams?o=Ld(o):typeof o!="string"&&(o="");let a=[n,r,e,o,s].join("|"),c=Zm(a);return c}function Zm(i){let e=0;for(let t of i)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Ud(i){return[{provide:Ro,useFactory:()=>(_o("NgHttpTransferCache"),re({isCacheActive:!0},i))},{provide:Gm,useValue:jm,multi:!0,deps:[Sc,Ro]},{provide:To,multi:!0,useFactory:()=>{let e=le(os),t=le(Ro);return()=>{yd(e).then(()=>{t.isCacheActive=!1})}}}]}function Km(i,e){let t=new URL(i,"resolve://").origin,n=e[t];return n?i.replace(t,n):i}var Lc=class extends wd{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Nc=class i extends Lc{static makeCurrent(){bd(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=ng();return t==null?null:ig(t)}resetBaseElement(){ls=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Cc(document.cookie,e)}},ls=null;function ng(){return ls=ls||document.querySelector("base"),ls?ls.getAttribute("href"):null}function ig(i){return new URL(i,document.baseURI).pathname}var rg=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),Io=new ft(""),Bd=(()=>{let e=class e{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(s=>{s.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,s){return this._findPluginFor(r).addEventListener(n,r,s)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(o=>o.supports(n)),!r)throw new dt(5101,!1);return this._eventNameToPlugin.set(n,r),r}};e.\u0275fac=function(r){return new(r||e)(gt(Io),gt(Xt))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),hs=class{constructor(e){this._doc=e}},Ic="ng-app-id",zd=(()=>{let e=class e{constructor(n,r,s,o={}){this.doc=n,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=cs(o),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(s=>s.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${Ic}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(n,r){let s=this.styleRef;if(s.has(n)){let o=s.get(n);return o.usage+=r,o.usage}return s.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===n)return s.delete(r),o.removeAttribute(Ic),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Ic,this.appId),n.appendChild(a),a}}addStyleToHost(n,r){let s=this.getStyleElement(n,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(gt(At),gt(xc),gt(Mc,8),gt(Mi))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),Dc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Fc=/%COMP%/g,kd="%COMP%",sg=`_nghost-${kd}`,og=`_ngcontent-${kd}`,ag=!0,cg=new ft("",{providedIn:"root",factory:()=>ag});function lg(i){return og.replace(Fc,i)}function hg(i){return sg.replace(Fc,i)}function Vd(i,e){return e.map(t=>t.replace(Fc,i))}var Do=(()=>{let e=class e{constructor(n,r,s,o,a,c,l,h=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=h,this.rendererByCompId=new Map,this.platformIsServer=cs(c),this.defaultRenderer=new us(n,a,l,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===ts.ShadowDom&&(r=ct(re({},r),{encapsulation:ts.Emulated}));let s=this.getOrCreateRenderer(n,r);return s instanceof Lo?s.applyToHost(n):s instanceof ds&&s.applyStyles(),s}getOrCreateRenderer(n,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,h=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer;switch(r.encapsulation){case ts.Emulated:o=new Lo(l,h,r,this.appId,u,a,c,d);break;case ts.ShadowDom:return new Uc(l,h,n,r,a,c,this.nonce,d);default:o=new ds(l,h,r,u,a,c,d);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(gt(Bd),gt(zd),gt(xc),gt(cg),gt(At),gt(Mi),gt(Xt),gt(Mc))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),us=class{constructor(e,t,n,r){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Dc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Od(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Od(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new dt(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Dc[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Dc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(ns.DashCase|ns.Important)?e.style.setProperty(t,n,r&ns.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&ns.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n){if(typeof e=="string"&&(e=Rc().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(n))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Od(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Uc=class extends us{constructor(e,t,n,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=Vd(r.id,r.styles);for(let h of l){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=h,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ds=class extends us{constructor(e,t,n,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?Vd(c,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Lo=class extends ds{constructor(e,t,n,r,s,o,a,c){let l=r+"-"+n.id;super(e,t,n,s,o,a,c,l),this.contentAttr=lg(l),this.hostAttr=hg(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}},ug=(()=>{let e=class e extends hs{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,s){return n.addEventListener(r,s,!1),()=>this.removeEventListener(n,r,s)}removeEventListener(n,r,s){return n.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(gt(At))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),dg=(()=>{let e=class e extends hs{constructor(n){super(n),this.delegate=le(Md,{optional:!0})}supports(n){return this.delegate?this.delegate.supports(n):!1}addEventListener(n,r,s){return this.delegate.addEventListener(n,r,s)}removeEventListener(n,r,s){return this.delegate.removeEventListener(n,r,s)}};e.\u0275fac=function(r){return new(r||e)(gt(At))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),Fd=["alt","control","meta","shift"],fg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},pg={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},mg=(()=>{let e=class e extends hs{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Rc().onAndCancel(n,o.domEventName,a))}static parseEventName(n){let r=n.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Fd.forEach(h=>{let u=r.indexOf(h);u>-1&&(r.splice(u,1),a+=h+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(n,r){let s=fg[n.key]||n.key,o="";return r.indexOf("code.")>-1&&(s=n.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Fd.forEach(a=>{if(a!==s){let c=pg[a];c(n)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(n,r,s){return o=>{e.matchEventFullKeyCode(o,n)&&s.runGuarded(()=>r(o))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(r){return new(r||e)(gt(At))},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})();function Hd(i,e){return xd(re({rootComponent:i},gg(e)))}function gg(i){return{appProviders:[...Mg,...i?.providers??[]],platformProviders:xg}}function vg(){Nc.makeCurrent()}function yg(){return new yc}function _g(){return od(document),document}var xg=[{provide:Mi,useValue:Ed},{provide:ad,useValue:vg,multi:!0},{provide:At,useFactory:_g,deps:[]}];var Mg=[{provide:id,useValue:"root"},{provide:yc,useFactory:yg,deps:[]},{provide:Io,useClass:ug,multi:!0,deps:[At,Xt,Mi]},{provide:Io,useClass:mg,multi:!0,deps:[At]},{provide:Io,useClass:dg,multi:!0},Do,zd,Bd,{provide:Si,useExisting:Do},{provide:Td,useClass:rg,deps:[]},[]];var Gd=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(r){return new(r||e)(gt(At))},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Oc=function(i){return i[i.NoHttpTransferCache=0]="NoHttpTransferCache",i[i.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",i[i.I18nSupport=2]="I18nSupport",i[i.EventReplay=3]="EventReplay",i}(Oc||{});function Wd(...i){let e=[],t=new Set,n=t.has(Oc.HttpTransferCacheOptions);for(let{\u0275providers:r,\u0275kind:s}of i)t.add(s),r.length&&e.push(r);return Cn([[],Sd(),t.has(Oc.NoHttpTransferCache)||n?[]:Ud({}),e])}var Ue="primary",Ps=Symbol("RouteTitle"),Hc=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function lr(i){return new Hc(i)}function wg(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function Eg(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!Sn(i[t],e[t]))return!1;return!0}function Sn(i,e){let t=i?Gc(i):void 0,n=e?Gc(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Jd(i[r],e[r]))return!1;return!0}function Gc(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Jd(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function Qd(i){return i.length>0?i[i.length-1]:null}function ni(i){return $u(i)?i:vd(i)?tn(Promise.resolve(i)):Ne(i)}var Tg={exact:tf,subset:nf},ef={exact:Ag,subset:Rg,ignored:()=>!0};function Xd(i,e,t){return Tg[t.paths](i.root,e.root,t.matrixParams)&&ef[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function Ag(i,e){return Sn(i,e)}function tf(i,e,t){if(!Ei(i.segments,e.segments)||!Oo(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!tf(i.children[n],e.children[n],t))return!1;return!0}function Rg(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>Jd(i[t],e[t]))}function nf(i,e,t){return rf(i,e,e.segments,t)}function rf(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!Ei(r,t)||e.hasChildren()||!Oo(r,t,n))}else if(i.segments.length===t.length){if(!Ei(i.segments,t)||!Oo(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!nf(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!Ei(i.segments,r)||!Oo(i.segments,r,n)||!i.children[Ue]?!1:rf(i.children[Ue],e,s,n)}}function Oo(i,e,t){return e.every((n,r)=>ef[t](i[r].parameters,n.parameters))}var ti=class{constructor(e=new nt([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=lr(this.queryParams),this._queryParamMap}toString(){return Ig.serialize(this)}},nt=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Fo(this)}},wi=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=lr(this.parameters),this._parameterMap}toString(){return of(this)}};function Cg(i,e){return Ei(i,e)&&i.every((t,n)=>Sn(t.parameters,e[n].parameters))}function Ei(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function Pg(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===Ue&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==Ue&&(t=t.concat(e(r,n)))}),t}var pl=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:()=>new _s,providedIn:"root"});let i=e;return i})(),_s=class{parse(e){let t=new Xc(e);return new ti(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${fs(e.root,!0)}`,n=Ng(e.queryParams),r=typeof e.fragment=="string"?`#${Dg(e.fragment)}`:"";return`${t}${n}${r}`}},Ig=new _s;function Fo(i){return i.segments.map(e=>of(e)).join("/")}function fs(i,e){if(!i.hasChildren())return Fo(i);if(e){let t=i.children[Ue]?fs(i.children[Ue],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==Ue&&n.push(`${r}:${fs(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Pg(i,(n,r)=>r===Ue?[fs(i.children[Ue],!1)]:[`${r}:${fs(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[Ue]!=null?`${Fo(i)}/${t[0]}`:`${Fo(i)}/(${t.join("//")})`}}function sf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function No(i){return sf(i).replace(/%3B/gi,";")}function Dg(i){return encodeURI(i)}function Wc(i){return sf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Bo(i){return decodeURIComponent(i)}function jd(i){return Bo(i.replace(/\+/g,"%20"))}function of(i){return`${Wc(i.path)}${Lg(i.parameters)}`}function Lg(i){return Object.entries(i).map(([e,t])=>`;${Wc(e)}=${Wc(t)}`).join("")}function Ng(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${No(t)}=${No(r)}`).join("&"):`${No(t)}=${No(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var Ug=/^[^\/()?;#]+/;function Bc(i){let e=i.match(Ug);return e?e[0]:""}var Og=/^[^\/()?;=#]+/;function Fg(i){let e=i.match(Og);return e?e[0]:""}var Bg=/^[^=?&#]+/;function zg(i){let e=i.match(Bg);return e?e[0]:""}var kg=/^[^&#]+/;function Vg(i){let e=i.match(kg);return e?e[0]:""}var Xc=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new nt([],{}):new nt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[Ue]=new nt(e,t)),n}parseSegment(){let e=Bc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new dt(4009,!1);return this.capture(e),new wi(Bo(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=Fg(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=Bc(this.remaining);r&&(n=r,this.capture(n))}e[Bo(t)]=Bo(n)}parseQueryParam(e){let t=zg(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=Vg(this.remaining);o&&(n=o,this.capture(n))}let r=jd(t),s=jd(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new dt(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new nt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new dt(4011,!1)}};function af(i){return i.segments.length>0?new nt([],{[Ue]:i}):i}function cf(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=cf(r);if(n===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new nt(i.segments,e);return Hg(t)}function Hg(i){if(i.numberOfChildren===1&&i.children[Ue]){let e=i.children[Ue];return new nt(i.segments.concat(e.segments),e.children)}return i}function xs(i){return i instanceof ti}function Gg(i,e,t=null,n=null){let r=lf(i);return hf(r,e,t,n)}function lf(i){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new nt(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=af(n);return e??r}function hf(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return zc(r,r,r,t,n);let s=Wg(e);if(s.toRoot())return zc(r,r,new nt([],{}),t,n);let o=Xg(s,r,i),a=o.processChildren?gs(o.segmentGroup,o.index,s.commands):df(o.segmentGroup,o.index,s.commands);return zc(r,o.segmentGroup,a,t,n)}function zo(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ms(i){return typeof i=="object"&&i!=null&&i.outlets}function zc(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(h=>`${h}`):`${l}`});let o;i===e?o=t:o=uf(i,e,t);let a=af(cf(o));return new ti(a,s,r)}function uf(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=uf(s,e,t)}),new nt(i.segments,n)}var ko=class{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&zo(n[0]))throw new dt(4003,!1);let r=n.find(Ms);if(r&&r!==Qd(n))throw new dt(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Wg(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new ko(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ko(t,e,n)}var or=class{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function Xg(i,e,t){if(i.isAbsolute)return new or(e,!0,0);if(!t)return new or(e,!1,NaN);if(t.parent===null)return new or(t,!0,0);let n=zo(i.commands[0])?0:1,r=t.segments.length-1+n;return jg(t,r,i.numberOfDoubleDots)}function jg(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new dt(4005,!1);r=n.segments.length}return new or(n,!1,r-s)}function qg(i){return Ms(i[0])?i[0].outlets:{[Ue]:i}}function df(i,e,t){if(i??=new nt([],{}),i.segments.length===0&&i.hasChildren())return gs(i,e,t);let n=$g(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new nt(i.segments.slice(0,n.pathIndex),{});return s.children[Ue]=new nt(i.segments.slice(n.pathIndex),i.children),gs(s,0,r)}else return n.match&&r.length===0?new nt(i.segments,{}):n.match&&!i.hasChildren()?jc(i,e,t):n.match?gs(i,0,r):jc(i,e,t)}function gs(i,e,t){if(t.length===0)return new nt(i.segments,{});{let n=qg(t),r={};if(Object.keys(n).some(s=>s!==Ue)&&i.children[Ue]&&i.numberOfChildren===1&&i.children[Ue].segments.length===0){let s=gs(i.children[Ue],e,t);return new nt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=df(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new nt(i.segments,r)}}function $g(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(Ms(a))break;let c=`${a}`,l=n<t.length-1?t[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!$d(c,l,o))return s;n+=2}else{if(!$d(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function jc(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ms(s)){let c=Yg(s.outlets);return new nt(n,c)}if(r===0&&zo(t[0])){let c=i.segments[e];n.push(new wi(c.path,qd(t[0]))),r++;continue}let o=Ms(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&zo(a)?(n.push(new wi(o,qd(a))),r+=2):(n.push(new wi(o,{})),r++)}return new nt(n,{})}function Yg(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=jc(new nt([],{}),0,n))}),e}function qd(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function $d(i,e,t){return i==t.path&&Sn(e,t.parameters)}var vs="imperative",Pt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Pt||{}),rn=class{constructor(e,t){this.id=e,this.url=t}},Ss=class extends rn{constructor(e,t,n="imperative",r=null){super(e,t),this.type=Pt.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ti=class extends rn{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n,this.type=Pt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Yt=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(Yt||{}),qc=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(qc||{}),Dn=class extends rn{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Pt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ai=class extends rn{constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r,this.type=Pt.NavigationSkipped}},bs=class extends rn{constructor(e,t,n,r){super(e,t),this.error=n,this.target=r,this.type=Pt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Vo=class extends rn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Pt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},$c=class extends rn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Pt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yc=class extends rn{constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s,this.type=Pt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zc=class extends rn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Pt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kc=class extends rn{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r,this.type=Pt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jc=class{constructor(e){this.route=e,this.type=Pt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Qc=class{constructor(e){this.route=e,this.type=Pt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},el=class{constructor(e){this.snapshot=e,this.type=Pt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tl=class{constructor(e){this.snapshot=e,this.type=Pt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nl=class{constructor(e){this.snapshot=e,this.type=Pt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ws=class{constructor(e){this.snapshot=e,this.type=Pt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Es=class{},hr=class{constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function Zg(i,e){return i.providers&&!i._injector&&(i._injector=xo(i.providers,e,`Route: ${i.path}`)),i._injector??e}function un(i){return i.outlet||Ue}function Kg(i,e){let t=i.filter(n=>un(n)===e);return t.push(...i.filter(n=>un(n)!==e)),t}function Is(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var il=class{get injector(){return Is(this.route?.snapshot)??this.rootInjector}set injector(e){}constructor(e){this.rootInjector=e,this.outlet=null,this.route=null,this.children=new $o(this.rootInjector),this.attachRef=null}},$o=(()=>{let e=class e{constructor(n){this.rootInjector=n,this.contexts=new Map}onChildOutletCreated(n,r){let s=this.getOrCreateContext(n);s.outlet=r,this.contexts.set(n,s)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new il(this.rootInjector),this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}};e.\u0275fac=function(r){return new(r||e)(gt(tr))},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Ho=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=rl(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=rl(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=sl(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return sl(e,this._root).map(t=>t.value)}};function rl(i,e){if(i===e.value)return e;for(let t of e.children){let n=rl(i,t);if(n)return n}return null}function sl(i,e){if(i===e.value)return[e];for(let t of e.children){let n=sl(i,t);if(n.length)return n.unshift(e),n}return[]}var $t=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function sr(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var Go=class extends Ho{constructor(e,t){super(e),this.snapshot=t,ml(this,e)}toString(){return this.snapshot.toString()}};function ff(i){let e=Jg(i),t=new en([new wi("",{})]),n=new en({}),r=new en({}),s=new en({}),o=new en(""),a=new ur(t,n,s,o,r,Ue,i,e.root);return a.snapshot=e.root,new Go(new $t(a,[]),e)}function Jg(i){let e={},t={},n={},r="",s=new ar([],e,n,r,t,Ue,i,null,{});return new Xo("",new $t(s,[]))}var ur=class{constructor(e,t,n,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(ot(l=>l[Ps]))??Ne(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ot(e=>lr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ot(e=>lr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Wo(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:re(re({},e.params),i.params),data:re(re({},e.data),i.data),resolve:re(re(re(re({},i.data),e.data),r?.data),i._resolvedData)}:n={params:re({},i.params),data:re({},i.data),resolve:re(re({},i.data),i._resolvedData??{})},r&&mf(r)&&(n.resolve[Ps]=r.title),n}var ar=class{get title(){return this.data?.[Ps]}constructor(e,t,n,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=lr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=lr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Xo=class extends Ho{constructor(e,t){super(t),this.url=e,ml(this,t)}toString(){return pf(this._root)}};function ml(i,e){e.value._routerState=i,e.children.forEach(t=>ml(i,t))}function pf(i){let e=i.children.length>0?` { ${i.children.map(pf).join(", ")} } `:"";return`${i.value}${e}`}function kc(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,Sn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),Sn(e.params,t.params)||i.paramsSubject.next(t.params),Eg(e.url,t.url)||i.urlSubject.next(t.url),Sn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function ol(i,e){let t=Sn(i.params,e.params)&&Cg(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||ol(i.parent,e.parent))}function mf(i){return typeof i.title=="string"||i.title===null}var Ds=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Ue,this.activateEvents=new xi,this.deactivateEvents=new xi,this.attachEvents=new xi,this.detachEvents=new xi,this.parentContexts=le($o),this.location=le(nr),this.changeDetector=le(as),this.inputBinder=le(gl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:s}=n.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new dt(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new dt(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new dt(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new dt(4013,!1);this._activatedRoute=n;let s=this.location,a=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new al(n,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=er({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[rd]});let i=e;return i})(),al=class i{__ngOutletInjector(e){return new i(this.route,this.childContexts,e)}constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===ur?this.route:e===$o?this.childContexts:this.parent.get(e,t)}},gl=new ft("");function Qg(i,e,t){let n=Ts(i,e._root,t?t._root:void 0);return new Go(n,e)}function Ts(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=ev(i,e,t);return new $t(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ts(i,a)),o}}let n=tv(e.value),r=e.children.map(s=>Ts(i,s));return new $t(n,r)}}function ev(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Ts(i,n,r);return Ts(i,n)})}function tv(i){return new ur(new en(i.url),new en(i.params),new en(i.queryParams),new en(i.fragment),new en(i.data),i.outlet,i.component,i)}var As=class{constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},gf="ngNavigationCancelingError";function jo(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=xs(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=vf(!1,Yt.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function vf(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[gf]=!0,t.cancellationCode=e,t}function nv(i){return yf(i)&&xs(i.url)}function yf(i){return!!i&&i[gf]}var iv=(i,e,t,n)=>ot(r=>(new cl(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),cl=class{constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),kc(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=sr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=sr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=sr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=sr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new ws(s.value.snapshot))}),e.children.length&&this.forwardEvent(new tl(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(kc(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),kc(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},qo=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},cr=class{constructor(e,t){this.component=e,this.route=t}};function rv(i,e,t){let n=i._root,r=e?e._root:null;return ps(n,r,t,[n.value])}function sv(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function fr(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!nd(i)?i:e.get(i):n}function ps(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=sr(e);return i.children.forEach(o=>{ov(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ys(a,t.getContext(o),r)),r}function ov(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=av(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new qo(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ps(i,e,a?a.children:null,n,r):ps(i,e,t,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new cr(a.outlet.component,o))}else o&&ys(e,a,r),r.canActivateChecks.push(new qo(n)),s.component?ps(i,null,a?a.children:null,n,r):ps(i,null,t,n,r);return r}function av(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!Ei(i.url,e.url);case"pathParamsOrQueryParamsChange":return!Ei(i.url,e.url)||!Sn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ol(i,e)||!Sn(i.queryParams,e.queryParams);case"paramsChange":default:return!ol(i,e)}}function ys(i,e,t){let n=sr(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?ys(o,e.children.getContext(s),t):ys(o,null,t):ys(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new cr(e.outlet.component,r)):t.canDeactivateChecks.push(new cr(null,r)):t.canDeactivateChecks.push(new cr(null,r))}function Ls(i){return typeof i=="function"}function cv(i){return typeof i=="boolean"}function lv(i){return i&&Ls(i.canLoad)}function hv(i){return i&&Ls(i.canActivate)}function uv(i){return i&&Ls(i.canActivateChild)}function dv(i){return i&&Ls(i.canDeactivate)}function fv(i){return i&&Ls(i.canMatch)}function _f(i){return i instanceof Yu||i?.name==="EmptyError"}var Uo=Symbol("INITIAL_VALUE");function dr(){return hn(i=>uc(i.map(e=>e.pipe(Ji(1),td(Uo)))).pipe(ot(e=>{for(let t of e)if(t!==!0){if(t===Uo)return Uo;if(t===!1||pv(t))return t}return!0}),Rn(e=>e!==Uo),Ji(1)))}function pv(i){return xs(i)||i instanceof As}function mv(i,e){return nn(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ne(ct(re({},t),{guardsResult:!0})):gv(o,n,r,i).pipe(nn(a=>a&&cv(a)?vv(n,s,i,e):Ne(a)),ot(a=>ct(re({},t),{guardsResult:a})))})}function gv(i,e,t,n){return tn(i).pipe(nn(r=>Sv(r.component,r.route,t,e,n)),Kn(r=>r!==!0,!0))}function vv(i,e,t,n){return tn(e).pipe(Ki(r=>Zu(_v(r.route.parent,n),yv(r.route,n),Mv(i,r.path,t),xv(i,r.route,t))),Kn(r=>r!==!0,!0))}function yv(i,e){return i!==null&&e&&e(new nl(i)),Ne(!0)}function _v(i,e){return i!==null&&e&&e(new el(i)),Ne(!0)}function xv(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Ne(!0);let r=n.map(s=>dc(()=>{let o=Is(e)??t,a=fr(s,o),c=hv(a)?a.canActivate(e,i):kt(o,()=>a(e,i));return ni(c).pipe(Kn())}));return Ne(r).pipe(dr())}function Mv(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>sv(o)).filter(o=>o!==null).map(o=>dc(()=>{let a=o.guards.map(c=>{let l=Is(o.node)??t,h=fr(c,l),u=uv(h)?h.canActivateChild(n,i):kt(l,()=>h(n,i));return ni(u).pipe(Kn())});return Ne(a).pipe(dr())}));return Ne(s).pipe(dr())}function Sv(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ne(!0);let o=s.map(a=>{let c=Is(e)??r,l=fr(a,c),h=dv(l)?l.canDeactivate(i,e,t,n):kt(c,()=>l(i,e,t,n));return ni(h).pipe(Kn())});return Ne(o).pipe(dr())}function bv(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Ne(!0);let s=r.map(o=>{let a=fr(o,i),c=lv(a)?a.canLoad(e,t):kt(i,()=>a(e,t));return ni(c)});return Ne(s).pipe(dr(),xf(n))}function xf(i){return fo(Et(e=>{if(typeof e!="boolean")throw jo(i,e)}),ot(e=>e===!0))}function wv(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Ne(!0);let s=r.map(o=>{let a=fr(o,i),c=fv(a)?a.canMatch(e,t):kt(i,()=>a(e,t));return ni(c)});return Ne(s).pipe(dr(),xf(n))}var Rs=class{constructor(e){this.segmentGroup=e||null}},Cs=class extends Error{constructor(e){super(),this.urlTree=e}};function rr(i){return Qr(new Rs(i))}function Ev(i){return Qr(new dt(4e3,!1))}function Tv(i){return Qr(vf(!1,Yt.GuardRejected))}var ll=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Ne(n);if(r.numberOfChildren>1||!r.children[Ue])return Ev(`${e.redirectTo}`);r=r.children[Ue]}}applyRedirectCommands(e,t,n,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:h,url:u,outlet:d,params:m,data:v,title:x}=r,f=kt(s,()=>a({params:m,data:v,queryParams:c,fragment:l,routeConfig:h,url:u,outlet:d,title:x}));if(f instanceof ti)throw new Cs(f);t=f}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new Cs(o);return o}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new ti(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,n,r)}),new nt(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new dt(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},hl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Av(i,e,t,n,r){let s=vl(i,e,t);return s.matched?(n=Zg(e,n),wv(n,e,t,r).pipe(ot(o=>o===!0?s:re({},hl)))):Ne(s)}function vl(i,e,t){if(e.path==="**")return Rv(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?re({},hl):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||wg)(t,i,e);if(!r)return re({},hl);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?re(re({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Rv(i){return{matched:!0,parameters:i.length>0?Qd(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Yd(i,e,t,n){return t.length>0&&Iv(i,t,n)?{segmentGroup:new nt(e,Pv(n,new nt(t,i.children))),slicedSegments:[]}:t.length===0&&Dv(i,t,n)?{segmentGroup:new nt(i.segments,Cv(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new nt(i.segments,i.children),slicedSegments:t}}function Cv(i,e,t,n){let r={};for(let s of t)if(Yo(i,e,s)&&!n[un(s)]){let o=new nt([],{});r[un(s)]=o}return re(re({},n),r)}function Pv(i,e){let t={};t[Ue]=e;for(let n of i)if(n.path===""&&un(n)!==Ue){let r=new nt([],{});t[un(n)]=r}return t}function Iv(i,e,t){return t.some(n=>Yo(i,e,n)&&un(n)!==Ue)}function Dv(i,e,t){return t.some(n=>Yo(i,e,n))}function Yo(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Lv(i,e,t,n){return un(i)!==n&&(n===Ue||!Yo(e,t,i))?!1:vl(e,i,t).matched}function Nv(i,e,t){return e.length===0&&!i.children[t]}var ul=class{};function Uv(i,e,t,n,r,s,o="emptyOnly"){return new dl(i,e,t,n,r,o,s).recognize()}var Ov=31,dl=class{constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new ll(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new dt(4002,`'${e.segmentGroup}'`)}recognize(){let e=Yd(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(ot(({children:t,rootSnapshot:n})=>{let r=new $t(n,t),s=new Xo("",r),o=Gg(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new ar([],Object.freeze({}),Object.freeze(re({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ue,t).pipe(ot(n=>({children:n,rootSnapshot:t})),Zi(n=>{if(n instanceof Cs)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Rs?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,r,!0,s).pipe(ot(o=>o instanceof $t?[o]:[]))}processChildren(e,t,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return tn(s).pipe(Ki(o=>{let a=n.children[o],c=Kg(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Qu((o,a)=>(o.push(...a),o)),pc(null),Ju(),nn(o=>{if(o===null)return rr(n);let a=Mf(o);return Fv(a),Ne(a)}))}processSegment(e,t,n,r,s,o,a){return tn(t).pipe(Ki(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,n,r,s,o,a).pipe(Zi(l=>{if(l instanceof Rs)return Ne(null);throw l}))),Kn(c=>!!c),Zi(c=>{if(_f(c))return Nv(n,r,s)?Ne(new ul):rr(n);throw c}))}processSegmentAgainstRoute(e,t,n,r,s,o,a,c){return Lv(n,r,s,o)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o,c):rr(r):rr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o,a){let{matched:c,parameters:l,consumedSegments:h,positionalParamSegments:u,remainingSegments:d}=vl(t,r,s);if(!c)return rr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ov&&(this.allowRedirects=!1));let m=new ar(s,l,Object.freeze(re({},this.urlTree.queryParams)),this.urlTree.fragment,Zd(r),un(r),r.component??r._loadedComponent??null,r,Kd(r)),v=Wo(m,a,this.paramsInheritanceStrategy);m.params=Object.freeze(v.params),m.data=Object.freeze(v.data);let x=this.applyRedirects.applyRedirectCommands(h,r.redirectTo,u,m,e);return this.applyRedirects.lineralizeSegments(r,x).pipe(nn(f=>this.processSegment(e,n,t,f.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,r,s,o){let a=Av(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(hn(c=>c.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(hn(({routes:l})=>{let h=n._loadedInjector??e,{parameters:u,consumedSegments:d,remainingSegments:m}=c,v=new ar(d,u,Object.freeze(re({},this.urlTree.queryParams)),this.urlTree.fragment,Zd(n),un(n),n.component??n._loadedComponent??null,n,Kd(n)),x=Wo(v,o,this.paramsInheritanceStrategy);v.params=Object.freeze(x.params),v.data=Object.freeze(x.data);let{segmentGroup:f,slicedSegments:p}=Yd(t,d,m,l);if(p.length===0&&f.hasChildren())return this.processChildren(h,l,f,v).pipe(ot(_=>new $t(v,_)));if(l.length===0&&p.length===0)return Ne(new $t(v,[]));let b=un(n)===s;return this.processSegment(h,l,f,p,b?Ue:s,!0,v).pipe(ot(_=>new $t(v,_ instanceof $t?[_]:[])))}))):rr(t)))}getChildConfig(e,t,n){return t.children?Ne({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ne({routes:t._loadedRoutes,injector:t._loadedInjector}):bv(e,t,n,this.urlSerializer).pipe(nn(r=>r?this.configLoader.loadChildren(e,t).pipe(Et(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):Tv(t))):Ne({routes:[],injector:e})}};function Fv(i){i.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function Bv(i){let e=i.value.routeConfig;return e&&e.path===""}function Mf(i){let e=[],t=new Set;for(let n of i){if(!Bv(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=Mf(n.children);e.push(new $t(n.value,r))}return e.filter(n=>!t.has(n))}function Zd(i){return i.data||{}}function Kd(i){return i.resolve||{}}function zv(i,e,t,n,r,s){return nn(o=>Uv(i,e,t,n,o.extractedUrl,r,s).pipe(ot(({state:a,tree:c})=>ct(re({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function kv(i,e){return nn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Ne(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Sf(c))o.add(l);let a=0;return tn(o).pipe(Ki(c=>s.has(c)?Vv(c,n,i,e):(c.data=Wo(c,c.parent,i).resolve,Ne(void 0))),Et(()=>a++),mc(1),nn(c=>a===o.size?Ne(t):Zn))})}function Sf(i){let e=i.children.map(t=>Sf(t)).flat();return[i,...e]}function Vv(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!mf(r)&&(s[Ps]=r.title),Hv(s,i,e,n).pipe(ot(o=>(i._resolvedData=o,i.data=Wo(i,i.parent,t).resolve,null)))}function Hv(i,e,t,n){let r=Gc(i);if(r.length===0)return Ne({});let s={};return tn(r).pipe(nn(o=>Gv(i[o],e,t,n).pipe(Kn(),Et(a=>{if(a instanceof As)throw jo(new _s,a);s[o]=a}))),mc(1),Ku(s),Zi(o=>_f(o)?Zn:Qr(o)))}function Gv(i,e,t,n){let r=Is(e)??n,s=fr(i,r),o=s.resolve?s.resolve(e,t):kt(r,()=>s(e,t));return ni(o)}function Vc(i){return hn(e=>{let t=i(e);return t?tn(t).pipe(ot(()=>e)):Ne(e)})}var bf=(()=>{let e=class e{buildTitle(n){let r,s=n.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Ue);return r}getResolvedTitleForRoute(n){return n.data[Ps]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:()=>le(Wv),providedIn:"root"});let i=e;return i})(),Wv=(()=>{let e=class e extends bf{constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(gt(Gd))},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),yl=new ft("",{providedIn:"root",factory:()=>({})}),Xv=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["ng-component"]],standalone:!0,features:[qt],decls:1,vars:0,template:function(r,s){r&1&&Ot(0,"router-outlet")},dependencies:[Ds],encapsulation:2});let i=e;return i})();function _l(i){let e=i.children&&i.children.map(_l),t=e?ct(re({},i),{children:e}):re({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=Xv),t}var xl=new ft(""),jv=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=le(Tc)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Ne(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=ni(n.loadComponent()).pipe(ot(wf),Et(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),es(()=>{this.componentLoaders.delete(n)})),s=new hc(r,()=>new An).pipe(lc());return this.componentLoaders.set(n,s),s}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Ne({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=qv(r,this.compiler,n,this.onLoadEndListener).pipe(es(()=>{this.childrenLoaders.delete(r)})),a=new hc(o,()=>new An).pipe(lc());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function qv(i,e,t,n){return ni(i.loadChildren()).pipe(ot(wf),nn(r=>r instanceof ud||Array.isArray(r)?Ne(r):tn(e.compileModuleAsync(r))),ot(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(xl,[],{optional:!0,self:!0}).flat()),{routes:o.map(_l),injector:s}}))}function $v(i){return i&&typeof i=="object"&&"default"in i}function wf(i){return $v(i)?i.default:i}var Ml=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:()=>le(Yv),providedIn:"root"});let i=e;return i})(),Yv=(()=>{let e=class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Zv=new ft("");var Kv=new ft(""),Jv=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new An,this.transitionAbortSubject=new An,this.configLoader=le(jv),this.environmentInjector=le(tr),this.urlSerializer=le(pl),this.rootContexts=le($o),this.location=le(Ao),this.inputBindingEnabled=le(gl,{optional:!0})!==null,this.titleStrategy=le(bf),this.options=le(yl,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=le(Ml),this.createViewTransition=le(Zv,{optional:!0}),this.navigationErrorHandler=le(Kv,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Ne(void 0),this.rootComponentType=null;let n=s=>this.events.next(new Jc(s)),r=s=>this.events.next(new Qc(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(ct(re(re({},this.transitions.value),n),{id:r}))}setupNavigations(n,r,s){return this.transitions=new en({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:vs,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Rn(o=>o.id!==0),ot(o=>ct(re({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),hn(o=>{let a=!1,c=!1;return Ne(o).pipe(hn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Yt.SupersededByNewNavigation),Zn;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?ct(re({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let h=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!h&&u!=="reload"){let d="";return this.events.next(new Ai(l.id,this.urlSerializer.serialize(l.rawUrl),d,qc.IgnoredSameUrlNavigation)),l.resolve(!1),Zn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ne(l).pipe(hn(d=>{let m=this.transitions?.getValue();return this.events.next(new Ss(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),m!==this.transitions?.getValue()?Zn:Promise.resolve(d)}),zv(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),Et(d=>{o.targetSnapshot=d.targetSnapshot,o.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=ct(re({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let m=new Vo(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(m)}));if(h&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:d,extractedUrl:m,source:v,restoredState:x,extras:f}=l,p=new Ss(d,this.urlSerializer.serialize(m),v,x);this.events.next(p);let b=ff(this.rootComponentType).snapshot;return this.currentTransition=o=ct(re({},l),{targetSnapshot:b,urlAfterRedirects:m,extras:ct(re({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Ne(o)}else{let d="";return this.events.next(new Ai(l.id,this.urlSerializer.serialize(l.extractedUrl),d,qc.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Zn}}),Et(l=>{let h=new $c(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(h)}),ot(l=>(this.currentTransition=o=ct(re({},l),{guards:rv(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),mv(this.environmentInjector,l=>this.events.next(l)),Et(l=>{if(o.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw jo(this.urlSerializer,l.guardsResult);let h=new Yc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(h)}),Rn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Yt.GuardRejected),!1)),Vc(l=>{if(l.guards.canActivateChecks.length)return Ne(l).pipe(Et(h=>{let u=new Zc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(u)}),hn(h=>{let u=!1;return Ne(h).pipe(kv(this.paramsInheritanceStrategy,this.environmentInjector),Et({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(h,"",Yt.NoDataFromResolver)}}))}),Et(h=>{let u=new Kc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(u)}))}),Vc(l=>{let h=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe(Et(m=>{u.component=m}),ot(()=>{})));for(let m of u.children)d.push(...h(m));return d};return uc(h(l.targetSnapshot.root)).pipe(pc(null),Ji(1))}),Vc(()=>this.afterPreactivation()),hn(()=>{let{currentSnapshot:l,targetSnapshot:h}=o,u=this.createViewTransition?.(this.environmentInjector,l.root,h.root);return u?tn(u).pipe(ot(()=>o)):Ne(o)}),ot(l=>{let h=Qg(n.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=ct(re({},l),{targetRouterState:h}),this.currentNavigation.targetRouterState=h,o}),Et(()=>{this.events.next(new Es)}),iv(this.rootContexts,n.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Ji(1),Et({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ti(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Qi(this.transitionAbortSubject.pipe(Et(l=>{throw l}))),es(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",Yt.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Zi(l=>{if(c=!0,yf(l))this.events.next(new Dn(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),nv(l)?this.events.next(new hr(l.url,l.navigationBehaviorOptions)):o.resolve(!1);else{let h=new bs(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0);try{let u=kt(this.environmentInjector,()=>this.navigationErrorHandler?.(h));if(u instanceof As){let{message:d,cancellationCode:m}=jo(this.urlSerializer,u);this.events.next(new Dn(o.id,this.urlSerializer.serialize(o.extractedUrl),d,m)),this.events.next(new hr(u.redirectTo,u.navigationBehaviorOptions))}else{this.events.next(h);let d=n.errorHandler(l);o.resolve(!!d)}}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return Zn}))}))}cancelNavigationTransition(n,r,s){let o=new Dn(n.id,this.urlSerializer.serialize(n.extractedUrl),r,s);this.events.next(o),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Qv(i){return i!==vs}var ey=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:()=>le(ty),providedIn:"root"});let i=e;return i})(),fl=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},ty=(()=>{let e=class e extends fl{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=vc(e)))(s||e)}})(),e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Ef=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:()=>le(ny),providedIn:"root"});let i=e;return i})(),ny=(()=>{let e=class e extends Ef{constructor(){super(...arguments),this.location=le(Ao),this.urlSerializer=le(pl),this.options=le(yl,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=le(Ml),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ti,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=ff(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof Ss)this.stateMemento=this.createStateMemento();else if(n instanceof Ai)this.rawUrlTree=r.initialUrl;else if(n instanceof Vo){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else n instanceof Es?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):n instanceof Dn&&(n.code===Yt.GuardRejected||n.code===Yt.NoDataFromResolver)?this.restoreHistory(r):n instanceof bs?this.restoreHistory(r,!0):n instanceof Ti&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let s=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=re(re({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=re(re({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===n.finalUrl&&o===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=vc(e)))(s||e)}})(),e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ms=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(ms||{});function iy(i,e){i.events.pipe(Rn(t=>t instanceof Ti||t instanceof Dn||t instanceof bs||t instanceof Ai),ot(t=>t instanceof Ti||t instanceof Ai?ms.COMPLETE:(t instanceof Dn?t.code===Yt.Redirect||t.code===Yt.SupersededByNewNavigation:!1)?ms.REDIRECTING:ms.FAILED),Rn(t=>t!==ms.REDIRECTING),Ji(1)).subscribe(()=>{e()})}function ry(i){throw i}var sy={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},oy={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Zo=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.console=le(Eo),this.stateManager=le(Ef),this.options=le(yl,{optional:!0})||{},this.pendingTasks=le(_c),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=le(Jv),this.urlSerializer=le(pl),this.location=le(Ao),this.urlHandlingStrategy=le(Ml),this._events=new An,this.errorHandler=this.options.errorHandler||ry,this.navigated=!1,this.routeReuseStrategy=le(ey),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=le(xl,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!le(gl,{optional:!0}),this.eventsSubscription=new qu,this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Dn&&r.code!==Yt.Redirect&&r.code!==Yt.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Ti)this.navigated=!0;else if(r instanceof hr){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),l=re({info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:s.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Qv(s.source)},a);this.scheduleNavigation(c,vs,null,l,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}cy(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),vs,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=re({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(_l),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,h=l?this.currentUrlTree.fragment:a,u=null;switch(c){case"merge":u=re(re({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let m=s?s.snapshot:this.routerState.snapshot.root;d=lf(m)}catch{(typeof n[0]!="string"||n[0][0]!=="/")&&(n=[]),d=this.currentUrlTree.root}return hf(d,n,u,h??null)}navigateByUrl(n,r={skipLocationChange:!1}){let s=xs(n)?n:this.parseUrl(n),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,vs,null,r)}navigate(n,r={skipLocationChange:!1}){return ay(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let s;if(r===!0?s=re({},sy):r===!1?s=re({},oy):s=r,xs(n))return Xd(this.currentUrlTree,n,s);let o=this.parseUrl(n);return Xd(this.currentUrlTree,o,s)}removeEmptyProps(n){return Object.entries(n).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(n,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,h;a?(c=a.resolve,l=a.reject,h=a.promise):h=new Promise((d,m)=>{c=d,l=m});let u=this.pendingTasks.add();return iy(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:o,resolve:c,reject:l,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(d=>Promise.reject(d))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function ay(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new dt(4008,!1)}function cy(i){return!(i instanceof Es)&&!(i instanceof hr)}var ly=new ft("");function Tf(i,...e){return Cn([{provide:xl,multi:!0,useValue:i},[],{provide:ur,useFactory:hy,deps:[Zo]},{provide:To,multi:!0,useFactory:uy},e.map(t=>t.\u0275providers)])}function hy(i){return i.routerState.root}function uy(){let i=le(yi);return e=>{let t=i.get(os);if(e!==t.components[0])return;let n=i.get(Zo),r=i.get(dy);i.get(fy)===1&&n.initialNavigation(),i.get(py,null,gc.Optional)?.setUpPreloading(),i.get(ly,null,gc.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var dy=new ft("",{factory:()=>new An}),fy=new ft("",{providedIn:"root",factory:()=>1});var py=new ft("");var du="169",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gy=0,Af=1,vy=2;var Ip=0,Ya=1,Zs=2,mn=3,ui=0,Vt=1,Bn=2,hi=0,Ir=1,Rf=2,Cf=3,Pf=4,yy=5,Ui=100,_y=101,xy=102,My=103,Sy=104,by=200,wy=201,Ey=202,Ty=203,Ql=204,eh=205,Ay=206,Ry=207,Cy=208,Py=209,Iy=210,Dy=211,Ly=212,Ny=213,Uy=214,th=0,nh=1,ih=2,Ur=3,rh=4,sh=5,oh=6,ah=7,Dp=0,Oy=1,Fy=2,En=0,By=1,zy=2,ky=3,fu=4,Vy=5,Hy=6,Gy=7;var If=300,Or=301,Fr=302,ch=303,lh=304,Za=306,hh=1e3,Bi=1001,uh=1002,on=1003,Wy=1004;var Ko=1005;var vn=1006,Sl=1007;var zi=1008;var yn=1009,Lp=1010,Np=1011,Ws=1012,pu=1013,ki=1014,zn=1015,Ks=1016,mu=1017,gu=1018,Br=1020,Up=35902,Op=1021,Fp=1022,Jt=1023,Bp=1024,zp=1025,Dr=1026,zr=1027,kp=1028,vu=1029,Vp=1030,yu=1031;var _u=1033,_a=33776,xa=33777,Ma=33778,Sa=33779,dh=35840,fh=35841,ph=35842,mh=35843,gh=36196,vh=37492,yh=37496,_h=37808,xh=37809,Mh=37810,Sh=37811,bh=37812,wh=37813,Eh=37814,Th=37815,Ah=37816,Rh=37817,Ch=37818,Ph=37819,Ih=37820,Dh=37821,ba=36492,Lh=36494,Nh=36495,Hp=36283,Uh=36284,Oh=36285,Fh=36286;var Ea=2300,Bh=2301,bl=2302,Df=2400,Lf=2401,Nf=2402;var Xy=3200,jy=3201;var Gp=0,qy=1,li="",bn="srgb",di="srgb-linear",xu="display-p3",Ka="display-p3-linear",Ta="linear",ht="srgb",Aa="rec709",Ra="p3";var pr=7680;var Uf=519,$y=512,Yy=513,Zy=514,Wp=515,Ky=516,Jy=517,Qy=518,e_=519,Of=35044;var Ff="300 es",kn=2e3,Ca=2001,cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,Vs=Math.PI/180,kr=180/Math.PI;function Xr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function t_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function n_(i,e,t){return i!==e?(t-i)/(e-i):0}function Hs(i,e,t){return(1-t)*i+t*e}function i_(i,e,t,n){return Hs(i,e,1-Math.exp(-t*n))}function r_(i,e=1){return e-Math.abs(Mu(i,e*2)-e)}function s_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c_(i,e){return i+Math.random()*(e-i)}function l_(i){return i*(.5-Math.random())}function h_(i){i!==void 0&&(Bf=i);let e=Bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u_(i){return i*Vs}function d_(i){return i*kr}function f_(i){return(i&i-1)===0&&i!==0}function p_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function m_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function g_(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xp={DEG2RAD:Vs,RAD2DEG:kr,generateUUID:Xr,clamp:Nt,euclideanModulo:Mu,mapLinear:t_,inverseLerp:n_,lerp:Hs,damp:i_,pingpong:r_,smoothstep:s_,smootherstep:o_,randInt:a_,randFloat:c_,randFloatSpread:l_,seededRandom:h_,degToRad:u_,radToDeg:d_,isPowerOfTwo:f_,ceilPowerOfTwo:p_,floorPowerOfTwo:m_,setQuaternionFromProperEuler:g_,normalize:Ft,denormalize:Rr},De=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],x=r[0],f=r[3],p=r[6],b=r[1],_=r[4],E=r[7],L=r[2],R=r[5],T=r[8];return s[0]=o*x+a*b+c*L,s[3]=o*f+a*_+c*R,s[6]=o*p+a*E+c*T,s[1]=l*x+h*b+u*L,s[4]=l*f+h*_+u*R,s[7]=l*p+h*E+u*T,s[2]=d*x+m*b+v*L,s[5]=d*f+m*_+v*R,s[8]=d*p+m*E+v*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,v=t*u+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/v;return e[0]=u*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wl.makeScale(e,t)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wl=new Fe;function jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v_(){let i=Pa("canvas");return i.style.display="block",i}var zf={};function wa(i){i in zf||(zf[i]=!0,console.warn(i))}function y_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function __(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x_(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var kf=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vf=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[di]:{transfer:Ta,primaries:Aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[bn]:{transfer:ht,primaries:Aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ka]:{transfer:Ta,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Vf),fromReference:i=>i.applyMatrix3(kf)},[xu]:{transfer:ht,primaries:Ra,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vf),fromReference:i=>i.applyMatrix3(kf).convertLinearToSRGB()}},M_=new Set([di,Ka]),Xe={enabled:!0,_workingColorSpace:di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!M_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ns[e].toReference,r=Ns[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ns[i].primaries},getTransfer:function(i){return i===li?Ta:Ns[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ns[e].luminanceCoefficients)}};function Lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function El(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,zh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=Pa("canvas")),mr.width=e.width,mr.height=e.height;let n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},S_=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tl(r[o].image)):s.push(Tl(r[o]))}else s=Tl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var b_=0,qn=(()=>{class i extends cn{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Bi,s=Bi,o=vn,a=zi,c=Jt,l=yn,h=i.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Xr(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==If)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hh:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hh:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=If,i.DEFAULT_ANISOTROPY=1,i})(),it=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],v=c[9],x=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(v-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,E=(m+1)/2,L=(p+1)/2,R=(h+d)/4,T=(u+x)/4,I=(v+f)/4;return _>E&&_>L?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=R/n,s=T/n):E>L?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=I/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=T/s,r=I/s),this.set(n,r,s,t),this}let b=Math.sqrt((f-v)*(f-v)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(f-v)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kh=class extends cn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new qn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends kh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends qn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vh=class extends qn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[o+0],m=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(u!==x||c!==d||l!==m||h!==v){let f=1-a,p=c*d+l*m+h*v+u*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let L=Math.sqrt(_),R=Math.atan2(L,p*b);f=Math.sin(f*R)/L,a=Math.sin(a*R)/L}let E=a*b;if(c=c*f+d*E,l=l*f+m*E,h=h*f+v*E,u=u*f+x*E,f===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*u+c*m-l*d,e[t+1]=c*v+h*d+l*u-a*m,e[t+2]=l*v+h*m+a*d-c*u,e[t+3]=h*v-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),d=c(n/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u+d*m*v;break;case"YZX":this._x=d*h*u+l*m*v,this._y=l*m*u+d*h*v,this._z=l*h*v-d*m*u,this._w=l*h*u-d*m*v;break;case"XZY":this._x=d*h*u-l*m*v,this._y=l*m*u-d*h*v,this._z=l*h*v+d*m*u,this._w=l*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Al=new N,Hf=new _n,Vi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Qo.subVectors(this.max,Us),gr.subVectors(e.a,Us),vr.subVectors(e.b,Us),yr.subVectors(e.c,Us),ii.subVectors(vr,gr),ri.subVectors(yr,vr),Ri.subVectors(gr,yr);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ri.z,Ri.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ri.z,0,-Ri.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ri.y,Ri.x,0];return!Rl(t,gr,vr,yr,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,gr,vr,yr,Qo))?!1:(ea.crossVectors(ii,ri),t=[ea.x,ea.y,ea.z],Rl(t,gr,vr,yr,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ln=[new N,new N,new N,new N,new N,new N,new N,new N],dn=new N,Jo=new Vi,gr=new N,vr=new N,yr=new N,ii=new N,ri=new N,Ri=new N,Us=new N,Qo=new N,ea=new N,Ci=new N;function Rl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ci.fromArray(i,s);let a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),c=e.dot(Ci),l=t.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var w_=new Vi,Os=new N,Cl=new N,Xs=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):w_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Os,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Cl)),this.expandByPoint(Os.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new N,Pl=new N,ta=new N,si=new N,Il=new N,na=new N,Dl=new N,Vr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),si.copy(this.origin).sub(Pl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=si.dot(this.direction),c=-si.dot(ta),l=si.lengthSq(),h=Math.abs(1-o*o),u,d,m,v;if(h>0)if(u=o*c-a,d=o*a-c,v=s*h,u>=0)if(d>=-v)if(d<=v){let x=1/h;u*=x,d*=x,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-v?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=v?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pl).addScaledVector(ta,d),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,r,s){Il.subVectors(t,e),na.subVectors(n,e),Dl.crossVectors(Il,na);let o=this.direction.dot(Dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let c=a*this.direction.dot(na.crossVectors(si,na));if(c<0)return null;let l=a*this.direction.dot(Il.cross(si));if(l<0||c+l>o)return null;let h=-a*si.dot(Dl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,r,s,o,a,c,l,h,u,d,m,v,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,u,d,m,v,x,f)}set(e,t,n,r,s,o,a,c,l,h,u,d,m,v,x,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=v,p[11]=x,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*u,v=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,v=l*h,x=l*u;t[0]=d+x*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,v=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,m=o*u,v=a*h,x=a*u;t[0]=c*h,t[4]=v*l-m,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,m=o*l,v=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=v*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+v,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,m=o*l,v=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,T_)}lookAt(e,t,n){let r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),oi.crossVectors(n,Zt),oi.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),oi.crossVectors(n,Zt)),oi.normalize(),ia.crossVectors(Zt,oi),r[0]=oi.x,r[4]=ia.x,r[8]=Zt.x,r[1]=oi.y,r[5]=ia.y,r[9]=Zt.y,r[2]=oi.z,r[6]=ia.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],x=n[6],f=n[10],p=n[14],b=n[3],_=n[7],E=n[11],L=n[15],R=r[0],T=r[4],I=r[8],X=r[12],g=r[1],S=r[5],G=r[9],V=r[13],j=r[2],J=r[6],z=r[10],W=r[14],H=r[3],oe=r[7],he=r[11],ve=r[15];return s[0]=o*R+a*g+c*j+l*H,s[4]=o*T+a*S+c*J+l*oe,s[8]=o*I+a*G+c*z+l*he,s[12]=o*X+a*V+c*W+l*ve,s[1]=h*R+u*g+d*j+m*H,s[5]=h*T+u*S+d*J+m*oe,s[9]=h*I+u*G+d*z+m*he,s[13]=h*X+u*V+d*W+m*ve,s[2]=v*R+x*g+f*j+p*H,s[6]=v*T+x*S+f*J+p*oe,s[10]=v*I+x*G+f*z+p*he,s[14]=v*X+x*V+f*W+p*ve,s[3]=b*R+_*g+E*j+L*H,s[7]=b*T+_*S+E*J+L*oe,s[11]=b*I+_*G+E*z+L*he,s[15]=b*X+_*V+E*W+L*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],x=e[7],f=e[11],p=e[15];return v*(+s*c*u-r*l*u-s*a*d+n*l*d+r*a*m-n*c*m)+x*(+t*c*m-t*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+f*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-r*a*h-t*c*u+t*a*d+r*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],x=e[13],f=e[14],p=e[15],b=u*f*l-x*d*l+x*c*m-a*f*m-u*c*p+a*d*p,_=v*d*l-h*f*l-v*c*m+o*f*m+h*c*p-o*d*p,E=h*x*l-v*u*l+v*a*m-o*x*m-h*a*p+o*u*p,L=v*u*c-h*x*c-v*a*d+o*x*d+h*a*f-o*u*f,R=t*b+n*_+r*E+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return e[0]=b*T,e[1]=(x*d*s-u*f*s-x*r*m+n*f*m+u*r*p-n*d*p)*T,e[2]=(a*f*s-x*c*s+x*r*l-n*f*l-a*r*p+n*c*p)*T,e[3]=(u*c*s-a*d*s-u*r*l+n*d*l+a*r*m-n*c*m)*T,e[4]=_*T,e[5]=(h*f*s-v*d*s+v*r*m-t*f*m-h*r*p+t*d*p)*T,e[6]=(v*c*s-o*f*s-v*r*l+t*f*l+o*r*p-t*c*p)*T,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*m+t*c*m)*T,e[8]=E*T,e[9]=(v*u*s-h*x*s-v*n*m+t*x*m+h*n*p-t*u*p)*T,e[10]=(o*x*s-v*a*s+v*n*l-t*x*l-o*n*p+t*a*p)*T,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*T,e[12]=L*T,e[13]=(h*x*r-v*u*r+v*n*d-t*x*d-h*n*f+t*u*f)*T,e[14]=(v*a*r-o*x*r-v*n*c+t*x*c+o*n*f-t*a*f)*T,e[15]=(o*u*r-h*a*r+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,v=s*u,x=o*h,f=o*u,p=a*u,b=c*l,_=c*h,E=c*u,L=n.x,R=n.y,T=n.z;return r[0]=(1-(x+p))*L,r[1]=(m+E)*L,r[2]=(v-_)*L,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(d+p))*R,r[6]=(f+b)*R,r[7]=0,r[8]=(v+_)*T,r[9]=(f-b)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=_r.set(r[0],r[1],r[2]).length(),o=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);let l=1/s,h=1/o,u=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=kn){let c=this.elements,l=2*s/(t-e),h=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),m,v;if(a===kn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ca)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=kn){let c=this.elements,l=1/(t-e),h=1/(n-r),u=1/(o-s),d=(t+e)*l,m=(n+r)*h,v,x;if(a===kn)v=(o+s)*u,x=-2*u;else if(a===Ca)v=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_r=new N,fn=new pt,E_=new N(0,0,0),T_=new N(1,1,1),oi=new N,ia=new N,Zt=new N,Gf=new pt,Wf=new _n,Hi=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],h=s[5],u=s[9],d=s[2],m=s[6],v=s[10];switch(n){case"XYZ":this._y=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gf,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Gn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A_=0,Xf=new N,xr=new _n,Un=new pt,ra=new N,Fs=new N,R_=new N,C_=new _n,jf=new N(1,0,0),qf=new N(0,1,0),$f=new N(0,0,1),Yf={type:"added"},P_={type:"removed"},Mr={type:"childadded",child:null},Ll={type:"childremoved",child:null},Wn=(()=>{class i extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,n=new Hi,r=new _n,s=new N(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Fe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return xr.setFromAxisAngle(t,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,n){return xr.setFromAxisAngle(t,n),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(jf,t)}rotateY(t){return this.rotateOnAxis(qf,t)}rotateZ(t){return this.rotateOnAxis($f,t)}translateOnAxis(t,n){return Xf.copy(t).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(jf,t)}translateY(t){return this.translateOnAxis(qf,t)}translateZ(t){return this.translateOnAxis($f,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ra.copy(t):ra.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Fs,ra,this.up):Un.lookAt(ra,Fs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Un),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yf),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(P_),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yf),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,R_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,C_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),m=a(t.skeletons),v=a(t.animations),x=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),x.length>0&&(r.nodes=x)}return r.object=s,r;function a(c){let l=[];for(let h in c){let u=c[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new N(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),pn=new N,On=new N,Nl=new N,Fn=new N,Sr=new N,br=new N,Zf=new N,Ul=new N,Ol=new N,Fl=new N,Bl=new it,zl=new it,kl=new it,Oi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),On.subVectors(n,t),Nl.subVectors(e,t);let o=pn.dot(pn),a=pn.dot(On),c=pn.dot(Nl),l=On.dot(On),h=On.dot(Nl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,v=(o*h-a*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(e,t),zl.fromBufferAttribute(e,n),kl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bl,s.x),o.addScaledVector(zl,s.y),o.addScaledVector(kl,s.z),o}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),On.subVectors(e,t),pn.cross(On).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),pn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Sr.subVectors(r,n),br.subVectors(s,n),Ul.subVectors(e,n);let c=Sr.dot(Ul),l=br.dot(Ul);if(c<=0&&l<=0)return t.copy(n);Ol.subVectors(e,r);let h=Sr.dot(Ol),u=br.dot(Ol);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Sr,o);Fl.subVectors(e,s);let m=Sr.dot(Fl),v=br.dot(Fl);if(v>=0&&m<=v)return t.copy(s);let x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(br,a);let f=h*v-m*u;if(f<=0&&u-h>=0&&m-v>=0)return Zf.subVectors(s,r),a=(u-h)/(u-h+(m-v)),t.copy(r).addScaledVector(Zf,a);let p=1/(f+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Vl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Mu(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Vl(o,s,e+1/3),this.g=Vl(o,s,e),this.b=Vl(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){let n=qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=El(e.r),this.g=El(e.g),this.b=El(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Xe.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Nt(Lt.r*255,0,255))*65536+Math.round(Nt(Lt.g*255,0,255))*256+Math.round(Nt(Lt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=bn){Xe.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,r=Lt.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(sa);let n=Hs(ai.h,sa.h,t),r=Hs(ai.s,sa.s,t),s=Hs(ai.l,sa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ge;Ge.NAMES=qp;var I_=0,Gi=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Ir,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=eh,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ql&&(n.blendSrc=this.blendSrc),this.blendDst!==eh&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},La=class extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new N,oa=new De,an=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Of,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),e}};var Na=class extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Vn=class extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}},D_=0,sn=new pt,Hl=new Wn,wr=new N,Kt=new Vi,Bs=new Vi,Rt=new N,Wi=class i extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?Ua:Na)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Hl.lookAt(e),Hl.updateMatrix(),this.applyMatrix4(Hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Kt.min,Bs.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,Bs.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(Bs.min),Kt.expandByPoint(Bs.max))}Kt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(wr.fromBufferAttribute(e,l),Rt.add(wr)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;let l=new N,h=new N,u=new N,d=new De,m=new De,v=new De,x=new N,f=new N;function p(I,X,g){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,X),u.fromBufferAttribute(n,g),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,X),v.fromBufferAttribute(s,g),h.sub(l),u.sub(l),m.sub(d),v.sub(d);let S=1/(m.x*v.y-v.x*m.y);isFinite(S)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(S),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(S),a[I].add(x),a[X].add(x),a[g].add(x),c[I].add(f),c[X].add(f),c[g].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,X=b.length;I<X;++I){let g=b[I],S=g.start,G=g.count;for(let V=S,j=S+G;V<j;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new N,E=new N,L=new N,R=new N;function T(I){L.fromBufferAttribute(r,I),R.copy(L);let X=a[I];_.copy(X),_.sub(L.multiplyScalar(L.dot(X))).normalize(),E.crossVectors(R,X);let S=E.dot(c[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,X=b.length;I<X;++I){let g=b[I],S=g.start,G=g.count;for(let V=S,j=S+G;V<j;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){let v=e.getX(d+0),x=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,f),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,v=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let p=0;p<h;p++)d[v++]=l[m++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kf=new pt,Pi=new Vr,aa=new Xs,Jf=new N,ca=new N,la=new N,ha=new N,Gl=new N,ua=new N,Qf=new N,da=new N,zt=class extends Wn{constructor(e=new Wi,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Gl.fromBufferAttribute(u,e),o?ua.addScaledVector(Gl,h):ua.addScaledVector(Gl.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(aa.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(aa,Jf)===null||Pi.origin.distanceToSquared(Jf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Kf),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){let f=d[v],p=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let E=b,L=_;E<L;E+=3){let R=a.getX(E),T=a.getX(E+1),I=a.getX(E+2);r=fa(this,p,e,n,l,h,u,R,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let f=v,p=x;f<p;f+=3){let b=a.getX(f),_=a.getX(f+1),E=a.getX(f+2);r=fa(this,o,e,n,l,h,u,b,_,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){let f=d[v],p=o[f.materialIndex],b=Math.max(f.start,m.start),_=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=b,L=_;E<L;E+=3){let R=E,T=E+1,I=E+2;r=fa(this,p,e,n,l,h,u,R,T,I),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{let v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let f=v,p=x;f<p;f+=3){let b=f,_=f+1,E=f+2;r=fa(this,o,e,n,l,h,u,b,_,E),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}};function L_(i,e,t,n,r,s,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===ui,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(da);return l<t.near||l>t.far?null:{distance:l,point:da.clone(),object:i}}function fa(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ca),i.getVertexPosition(c,la),i.getVertexPosition(l,ha);let h=L_(i,e,t,n,ca,la,ha,Qf);if(h){let u=new N;Oi.getBarycoord(Qf,ca,la,ha,u),r&&(h.uv=Oi.getInterpolatedAttribute(r,a,c,l,u,new De)),s&&(h.uv1=Oi.getInterpolatedAttribute(s,a,c,l,u,new De)),o&&(h.normal=Oi.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Oi.getNormal(ca,la,ha,d.normal),h.face=d,h.barycoord=u}return h}var Xn=class i extends Wi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Vn(l,3)),this.setAttribute("normal",new Vn(h,3)),this.setAttribute("uv",new Vn(u,2));function v(x,f,p,b,_,E,L,R,T,I,X){let g=E/T,S=L/I,G=E/2,V=L/2,j=R/2,J=T+1,z=I+1,W=0,H=0,oe=new N;for(let he=0;he<z;he++){let ve=he*S-V;for(let je=0;je<J;je++){let Ze=je*g-G;oe[x]=Ze*b,oe[f]=ve*_,oe[p]=j,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[f]=0,oe[p]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),u.push(je/T),u.push(1-he/I),W+=1}}for(let he=0;he<I;he++)for(let ve=0;ve<T;ve++){let je=d+ve+J*he,Ze=d+ve+J*(he+1),q=d+(ve+1)+J*(he+1),te=d+(ve+1)+J*he;c.push(je,Ze,te),c.push(Ze,q,te),H+=6}a.addGroup(m,H,X),m+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bt(i){let e={};for(let t=0;t<i.length;t++){let n=Hr(i[t]);for(let r in n)e[r]=n[r]}return e}function N_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $p(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var U_={clone:Hr,merge:Bt},O_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O_,this.fragmentShader=F_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=N_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Oa=class extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new N,ep=new De,tp=new De,xt=class extends Oa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Er=-90,Tr=1,Hh=class extends Wn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xt(Er,Tr,e,t);r.layers=this.layers,this.add(r);let s=new xt(Er,Tr,e,t);s.layers=this.layers,this.add(s);let o=new xt(Er,Tr,e,t);o.layers=this.layers,this.add(o);let a=new xt(Er,Tr,e,t);a.layers=this.layers,this.add(a);let c=new xt(Er,Tr,e,t);c.layers=this.layers,this.add(c);let l=new xt(Er,Tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Fa=class extends qn{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gh=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:hi});s.uniforms.tEquirect.value=t;let o=new zt(r,s),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=vn),new Hh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Wl=new N,B_=new N,z_=new Fe,gn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Wl.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z_.getNormalMatrix(e),r=this.coplanarPoint(Wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new Xs,pa=new N,js=class{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],v=r[9],x=r[10],f=r[11],p=r[12],b=r[13],_=r[14],E=r[15];if(n[0].setComponents(c-s,d-l,f-m,E-p).normalize(),n[1].setComponents(c+s,d+l,f+m,E+p).normalize(),n[2].setComponents(c+o,d+h,f+v,E+b).normalize(),n[3].setComponents(c-o,d-h,f-v,E-b).normalize(),n[4].setComponents(c-a,d-u,f-x,E-_).normalize(),t===kn)n[5].setComponents(c+a,d+u,f+x,E+_).normalize();else if(t===Ca)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function k_(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){let v=u[d],x=u[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,u[d]=x)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){let x=u[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Ba=class i extends Wi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,m=[],v=[],x=[],f=[];for(let p=0;p<h;p++){let b=p*d-o;for(let _=0;_<l;_++){let E=_*u-s;v.push(E,-b,0),x.push(0,0,1),f.push(_/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let _=b+l*p,E=b+l*(p+1),L=b+1+l*(p+1),R=b+1+l*p;m.push(_,E,R),m.push(E,L,R)}this.setIndex(m),this.setAttribute("position",new Vn(v,3)),this.setAttribute("normal",new Vn(x,3)),this.setAttribute("uv",new Vn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,k0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:V_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:j_,aomap_fragment:q_,aomap_pars_fragment:$_,batching_pars_vertex:Y_,batching_vertex:Z_,begin_vertex:K_,beginnormal_vertex:J_,bsdfs:Q_,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:s0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:c0,color_vertex:l0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:v0,colorspace_pars_fragment:y0,envmap_fragment:_0,envmap_common_pars_fragment:x0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:L0,envmap_vertex:b0,fog_vertex:w0,fog_pars_vertex:E0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:O0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:V0,lights_fragment_end:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:j0,map_fragment:q0,map_pars_fragment:$0,map_particle_fragment:Y0,map_particle_pars_fragment:Z0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:rx,normal_fragment_maps:sx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:cx,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:dx,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:yx,dithering_pars_fragment:_x,roughnessmap_fragment:xx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:bx,shadowmap_vertex:wx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:Ax,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Lx,transmission_fragment:Nx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Fx,uv_vertex:Bx,worldpos_vertex:zx,background_vert:kx,background_frag:Vx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:Xx,depth_vert:jx,depth_frag:qx,distanceRGBA_vert:$x,distanceRGBA_frag:Yx,equirect_vert:Zx,equirect_frag:Kx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:rM,meshmatcap_frag:sM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:cM,meshphong_frag:lM,meshphysical_vert:hM,meshphysical_frag:uM,meshtoon_vert:dM,meshtoon_frag:fM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:vM,sprite_vert:yM,sprite_frag:_M},ce={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},wn={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};wn.physical={uniforms:Bt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var ma={r:0,b:0,g:0},Di=new Hi,xM=new pt;function MM(i,e,t,n,r,s,o){let a=new Ge(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function v(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function x(b){let _=!1,E=v(b);E===null?p(a,c):E&&E.isColor&&(p(E,1),_=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(b,_){let E=v(_);E&&(E.isCubeTexture||E.mapping===Za)?(h===void 0&&(h=new zt(new Xn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Hr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Di.copy(_.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(Di)),h.material.toneMapped=Xe.getTransfer(E.colorSpace)!==ht,(u!==E||d!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new zt(new Ba(2,2),new Tn({name:"BackgroundMaterial",uniforms:Hr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,_){b.getRGB(ma,$p(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:x,addToRenderList:f}}function SM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(g,S,G,V,j){let J=!1,z=u(V,G,S);s!==z&&(s=z,l(s.object)),J=m(g,V,G,j),J&&v(g,V,G,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,E(g,S,G,V),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return i.createVertexArray()}function l(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,S,G){let V=G.wireframe===!0,j=n[g.id];j===void 0&&(j={},n[g.id]=j);let J=j[S.id];J===void 0&&(J={},j[S.id]=J);let z=J[V];return z===void 0&&(z=d(c()),J[V]=z),z}function d(g){let S=[],G=[],V=[];for(let j=0;j<t;j++)S[j]=0,G[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:V,object:g,attributes:{},index:null}}function m(g,S,G,V){let j=s.attributes,J=S.attributes,z=0,W=G.getAttributes();for(let H in W)if(W[H].location>=0){let he=j[H],ve=J[H];if(ve===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ve=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ve=g.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;z++}return s.attributesNum!==z||s.index!==V}function v(g,S,G,V){let j={},J=S.attributes,z=0,W=G.getAttributes();for(let H in W)if(W[H].location>=0){let he=J[H];he===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(he=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(he=g.instanceColor));let ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),j[H]=ve,z++}s.attributes=j,s.attributesNum=z,s.index=V}function x(){let g=s.newAttributes;for(let S=0,G=g.length;S<G;S++)g[S]=0}function f(g){p(g,0)}function p(g,S){let G=s.newAttributes,V=s.enabledAttributes,j=s.attributeDivisors;G[g]=1,V[g]===0&&(i.enableVertexAttribArray(g),V[g]=1),j[g]!==S&&(i.vertexAttribDivisor(g,S),j[g]=S)}function b(){let g=s.newAttributes,S=s.enabledAttributes;for(let G=0,V=S.length;G<V;G++)S[G]!==g[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function _(g,S,G,V,j,J,z){z===!0?i.vertexAttribIPointer(g,S,G,j,J):i.vertexAttribPointer(g,S,G,V,j,J)}function E(g,S,G,V){x();let j=V.attributes,J=G.getAttributes(),z=S.defaultAttributeValues;for(let W in J){let H=J[W];if(H.location>=0){let oe=j[W];if(oe===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(oe=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(oe=g.instanceColor)),oe!==void 0){let he=oe.normalized,ve=oe.itemSize,je=e.get(oe);if(je===void 0)continue;let Ze=je.buffer,q=je.type,te=je.bytesPerElement,ye=q===i.INT||q===i.UNSIGNED_INT||oe.gpuType===pu;if(oe.isInterleavedBufferAttribute){let pe=oe.data,Le=pe.stride,Ee=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)p(H.location+We,pe.meshPerAttribute);g.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<H.locationSize;We++)f(H.location+We);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let We=0;We<H.locationSize;We++)_(H.location+We,ve/H.locationSize,q,he,Le*te,(Ee+ve/H.locationSize*We)*te,ye)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe,oe.meshPerAttribute);g.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<H.locationSize;pe++)f(H.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe,ve/H.locationSize,q,he,ve*te,ve/H.locationSize*pe*te,ye)}}else if(z!==void 0){let he=z[W];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(H.location,he);break;case 3:i.vertexAttrib3fv(H.location,he);break;case 4:i.vertexAttrib4fv(H.location,he);break;default:i.vertexAttrib1fv(H.location,he)}}}}b()}function L(){I();for(let g in n){let S=n[g];for(let G in S){let V=S[G];for(let j in V)h(V[j].object),delete V[j];delete S[G]}delete n[g]}}function R(g){if(n[g.id]===void 0)return;let S=n[g.id];for(let G in S){let V=S[G];for(let j in V)h(V[j].object),delete V[j];delete S[G]}delete n[g.id]}function T(g){for(let S in n){let G=n[S];if(G[g.id]===void 0)continue;let V=G[g.id];for(let j in V)h(V[j].object),delete V[j];delete G[g.id]}}function I(){X(),o=!0,s!==r&&(s=r,l(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:X,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:f,disableUnusedAttributes:b}}function bM(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function c(l,h,u,d){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)o(l[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x];for(let x=0;x<d.length;x++)t.update(v,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Jt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:L,maxSamples:R}}function EM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new gn,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||r;return r=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let v=u.clippingPlanes,x=u.clipIntersection,f=u.clipShadows,p=i.get(u);if(!r||v===null||v.length===0||s&&!f)s?h(null):l();else{let b=s?0:n,_=b*4,E=p.clippingState||null;c.value=E,E=h(v,d,_,m);for(let L=0;L!==_;++L)E[L]=t[L];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,v){let x=u!==null?u.length:0,f=null;if(x!==0){if(f=c.value,v!==!0||f===null){let p=m+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,E=m;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(f,E),f[E+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function TM(i){let e=new WeakMap;function t(o,a){return a===ch?o.mapping=Or:a===lh&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ch||a===lh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Gh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var jn=class extends Oa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cr=4,np=[.125,.215,.35,.446,.526,.582],Fi=20,Xl=new jn,ip=new Ge,jl=null,ql=0,$l=0,Yl=!1,Ni=(1+Math.sqrt(5))/2,Ar=1/Ni,rp=[new N(-Ni,Ar,0),new N(Ni,Ar,0),new N(-Ar,0,Ni),new N(Ar,0,Ni),new N(0,Ni,-Ar),new N(0,Ni,Ar),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,ql,$l),this._renderer.xr.enabled=Yl,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ks,format:Jt,colorSpace:di,depthBuffer:!1},r=sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AM(s)),this._blurMaterial=RM(s,e,t)}return r}_compileMaterial(e){let t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,r){let a=new xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ip),h.toneMapping=En,h.autoClear=!1;let m=new La({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),v=new zt(new Xn,m),x=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(ip),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;ga(r,b*_,p>2?_:0,_,_),h.setRenderTarget(r),x&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ga(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rp[(r-s-1)%rp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new zt(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fi-1),x=s/v,f=isFinite(s)?1+Math.floor(h*x):Fi;f>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Fi}`);let p=[],b=0;for(let T=0;T<Fi;++T){let I=T/x,X=Math.exp(-I*I/2);p.push(X),T===0?b+=X:T<f&&(b+=2*X)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;let E=this._sizeLods[r],L=3*E*(r>_-Cr?r-_+Cr:0),R=4*(this._cubeSize-E);ga(t,L,R,3*E,2*E),c.setRenderTarget(t),c.render(u,Xl)}};function AM(i){let e=[],t=[],n=[],r=i,s=i-Cr+1+np.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Cr?c=np[o-i+Cr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,x=3,f=2,p=1,b=new Float32Array(x*v*m),_=new Float32Array(f*v*m),E=new Float32Array(p*v*m);for(let R=0;R<m;R++){let T=R%3*2/3-1,I=R>2?0:-1,X=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];b.set(X,x*v*R),_.set(d,f*v*R);let g=[R,R,R,R,R,R];E.set(g,p*v*R)}let L=new Wi;L.setAttribute("position",new an(b,x)),L.setAttribute("uv",new an(_,f)),L.setAttribute("faceIndex",new an(E,p)),e.push(L),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sp(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function RM(i,e,t){let n=new Float32Array(Fi),r=new N(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function op(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ap(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ch||c===lh,h=c===Or||c===Fr;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new za(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new za(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function PM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&wa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IM(i,e,t,n){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);for(let v in d.morphAttributes){let x=d.morphAttributes[v];for(let f=0,p=x.length;f<p;f++)e.remove(x[f])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let v in d)e.update(d[v],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let v in m){let x=m[v];for(let f=0,p=x.length;f<p;f++)e.update(x[f],i.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,v=u.attributes.position,x=0;if(m!==null){let b=m.array;x=m.version;for(let _=0,E=b.length;_<E;_+=3){let L=b[_+0],R=b[_+1],T=b[_+2];d.push(L,R,R,T,T,L)}}else if(v!==void 0){let b=v.array;x=v.version;for(let _=0,E=b.length/3-1;_<E;_+=3){let L=_+0,R=_+1,T=_+2;d.push(L,R,R,T,T,L)}}else return;let f=new(jp(d)?Ua:Na)(d,1);f.version=x;let p=s.get(u);p&&e.remove(p),s.set(u,f)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function DM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*o),t.update(m,n,1)}function l(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,d*o,v),t.update(m,n,v))}function h(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,v);let f=0;for(let p=0;p<v;p++)f+=m[p];t.update(f,n,1)}function u(d,m,v,x){if(v===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],x[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,v);let p=0;for(let b=0;b<v;b++)p+=m[b];for(let b=0;b<x.length;b++)t.update(p,n,x[b])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function LM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function NM(i,e,t){let n=new WeakMap,r=new it;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let g=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",g)};var m=g;d!==void 0&&d.texture.dispose();let v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;v===!0&&(E=1),x===!0&&(E=2),f===!0&&(E=3);let L=a.attributes.position.count*E,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let T=new Float32Array(L*R*4*u),I=new Da(T,L,R,u);I.type=zn,I.needsUpdate=!0;let X=E*4;for(let S=0;S<u;S++){let G=p[S],V=b[S],j=_[S],J=L*R*4*S;for(let z=0;z<G.count;z++){let W=z*X;v===!0&&(r.fromBufferAttribute(G,z),T[J+W+0]=r.x,T[J+W+1]=r.y,T[J+W+2]=r.z,T[J+W+3]=0),x===!0&&(r.fromBufferAttribute(V,z),T[J+W+4]=r.x,T[J+W+5]=r.y,T[J+W+6]=r.z,T[J+W+7]=0),f===!0&&(r.fromBufferAttribute(j,z),T[J+W+8]=r.x,T[J+W+9]=r.y,T[J+W+10]=r.z,T[J+W+11]=j.itemSize===4?r.w:1)}}d={count:u,texture:I,size:new De(L,R)},n.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let f=0;f<l.length;f++)v+=l[f];let x=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function UM(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var ka=class extends qn{constructor(e,t,n,r,s,o,a,c,l,h=Dr){if(h!==Dr&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dr&&(n=ki),n===void 0&&h===zr&&(n=Br),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zp=new qn,cp=new ka(1,1),Kp=new Da,Jp=new Vh,Qp=new Fa,lp=[],hp=[],up=new Float32Array(16),dp=new Float32Array(9),fp=new Float32Array(4);function jr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=lp[r];if(s===void 0&&(s=new Float32Array(r),lp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ja(i,e){let t=hp[e];t===void 0&&(t=new Int32Array(e),hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function OM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function zM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function kM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;fp.set(n),i.uniformMatrix2fv(this.addr,!1,fp),wt(t,n)}}function VM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),wt(t,n)}}function HM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;up.set(n),i.uniformMatrix4fv(this.addr,!1,up),wt(t,n)}}function GM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function WM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function XM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function qM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function YM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function KM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cp.compareFunction=Wp,s=cp):s=Zp,t.setTexture2D(e||s,r)}function JM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jp,r)}function QM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qp,r)}function eS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kp,r)}function tS(i){switch(i){case 5126:return OM;case 35664:return FM;case 35665:return BM;case 35666:return zM;case 35674:return kM;case 35675:return VM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return jM;case 5125:return qM;case 36294:return $M;case 36295:return YM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return eS}}function nS(i,e){i.uniform1fv(this.addr,e)}function iS(i,e){let t=jr(e,this.size,2);i.uniform2fv(this.addr,t)}function rS(i,e){let t=jr(e,this.size,3);i.uniform3fv(this.addr,t)}function sS(i,e){let t=jr(e,this.size,4);i.uniform4fv(this.addr,t)}function oS(i,e){let t=jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function aS(i,e){let t=jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cS(i,e){let t=jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lS(i,e){i.uniform1iv(this.addr,e)}function hS(i,e){i.uniform2iv(this.addr,e)}function uS(i,e){i.uniform3iv(this.addr,e)}function dS(i,e){i.uniform4iv(this.addr,e)}function fS(i,e){i.uniform1uiv(this.addr,e)}function pS(i,e){i.uniform2uiv(this.addr,e)}function mS(i,e){i.uniform3uiv(this.addr,e)}function gS(i,e){i.uniform4uiv(this.addr,e)}function vS(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zp,s[o])}function yS(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Jp,s[o])}function _S(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qp,s[o])}function xS(i,e,t){let n=this.cache,r=e.length,s=Ja(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kp,s[o])}function MS(i){switch(i){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return sS;case 35674:return oS;case 35675:return aS;case 35676:return cS;case 5124:case 35670:return lS;case 35667:case 35671:return hS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return fS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return xS}}var Wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tS(t.type)}},Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MS(t.type)}},jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function pp(i,e){i.seq.push(e),i.map[e.id]=e}function SS(i,e,t){let n=i.name,r=n.length;for(Zl.lastIndex=0;;){let s=Zl.exec(n),o=Zl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){pp(t,l===void 0?new Wh(a,i,e):new Xh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new jh(a),pp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SS(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function mp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bS=37297,wS=0;function ES(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function TS(i){let e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i),n;switch(e===t?n="":e===Ra&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ra&&(n="LinearSRGBToLinearDisplayP3"),i){case di:case Ka:return[n,"LinearTransferOETF"];case bn:case xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ES(i.getShaderSource(e),o)}else return r}function AS(i,e){let t=TS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RS(i,e){let t;switch(e){case By:t="Linear";break;case zy:t="Reinhard";break;case ky:t="Cineon";break;case fu:t="ACESFilmic";break;case Hy:t="AgX";break;case Gy:t="Neutral";break;case Vy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var va=new N;function CS(){Xe.getLuminanceCoefficients(va);let i=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function IS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ks(i){return i!==""}function vp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var LS=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(LS,US)}var NS=new Map;function US(i,e){let t=Oe[e];if(t===void 0){let n=NS.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}var OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(i){return i.replace(OS,FS)}function FS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ya?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zs?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function zS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function VS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dp:e="ENVMAP_BLENDING_MULTIPLY";break;case Oy:e="ENVMAP_BLENDING_MIX";break;case Fy:e="ENVMAP_BLENDING_ADD";break}return e}function HS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function GS(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=BS(t),l=zS(t),h=kS(t),u=VS(t),d=HS(t),m=PS(t),v=IS(s),x=r.createProgram(),f,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ks).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(f=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Oe.tonemapping_pars_fragment:"",t.toneMapping!==En?RS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,AS("linearToOutputTexel",t.outputColorSpace),CS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=qh(o),o=vp(o,t),o=yp(o,t),a=qh(a),a=vp(a,t),a=yp(a,t),o=_p(o),a=_p(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+f+o,E=b+p+a,L=mp(r,r.VERTEX_SHADER,_),R=mp(r,r.FRAGMENT_SHADER,E);r.attachShader(x,L),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(S){if(i.debug.checkShaderErrors){let G=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(L).trim(),j=r.getShaderInfoLog(R).trim(),J=!0,z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,R);else{let W=gp(r,L,"vertex"),H=gp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+W+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||j==="")&&(z=!1);z&&(S.diagnostics={runnable:J,programLog:G,vertexShader:{log:V,prefix:f},fragmentShader:{log:j,prefix:p}})}r.deleteShader(L),r.deleteShader(R),I=new Nr(r,x),X=DS(r,x)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(x,bS)),g},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wS++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=R,this}var WS=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yh(e),t.set(e,n)),n}},Yh=class{constructor(e){this.id=WS++,this.code=e,this.usedTimes=0}};function XS(i,e,t,n,r,s,o){let a=new Gn,c=new $h,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,v=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,S,G,V,j){let J=V.fog,z=j.geometry,W=g.isMeshStandardMaterial?V.environment:null,H=(g.isMeshStandardMaterial?t:e).get(g.envMap||W),oe=H&&H.mapping===Za?H.image.height:null,he=x[g.type];g.precision!==null&&(v=r.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));let ve=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,je=ve!==void 0?ve.length:0,Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let q,te,ye,pe;if(he){let Mt=wn[he];q=Mt.vertexShader,te=Mt.fragmentShader}else q=g.vertexShader,te=g.fragmentShader,c.update(g),ye=c.getVertexShaderID(g),pe=c.getFragmentShaderID(g);let Le=i.getRenderTarget(),Ee=j.isInstancedMesh===!0,We=j.isBatchedMesh===!0,Je=!!g.map,ke=!!g.matcap,P=!!H,It=!!g.aoMap,Ve=!!g.lightMap,qe=!!g.bumpMap,Te=!!g.normalMap,st=!!g.displacementMap,Ae=!!g.emissiveMap,w=!!g.metalnessMap,y=!!g.roughnessMap,O=g.anisotropy>0,$=g.clearcoat>0,Q=g.dispersion>0,Z=g.iridescence>0,Me=g.sheen>0,ae=g.transmission>0,de=O&&!!g.anisotropyMap,$e=$&&!!g.clearcoatMap,ne=$&&!!g.clearcoatNormalMap,me=$&&!!g.clearcoatRoughnessMap,Re=Z&&!!g.iridescenceMap,Ce=Z&&!!g.iridescenceThicknessMap,ge=Me&&!!g.sheenColorMap,Be=Me&&!!g.sheenRoughnessMap,C=!!g.specularMap,K=!!g.specularColorMap,A=!!g.specularIntensityMap,ee=ae&&!!g.transmissionMap,F=ae&&!!g.thicknessMap,Y=!!g.gradientMap,se=!!g.alphaMap,fe=g.alphaTest>0,He=!!g.alphaHash,Qe=!!g.extensions,ut=En;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ut=i.toneMapping);let ze={shaderID:he,shaderType:g.type,shaderName:g.name,vertexShader:q,fragmentShader:te,defines:g.defines,customVertexShaderID:ye,customFragmentShaderID:pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:We,batchingColor:We&&j._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&j.instanceColor!==null,instancingMorph:Ee&&j.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:di,alphaToCoverage:!!g.alphaToCoverage,map:Je,matcap:ke,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:oe,aoMap:It,lightMap:Ve,bumpMap:qe,normalMap:Te,displacementMap:m&&st,emissiveMap:Ae,normalMapObjectSpace:Te&&g.normalMapType===qy,normalMapTangentSpace:Te&&g.normalMapType===Gp,metalnessMap:w,roughnessMap:y,anisotropy:O,anisotropyMap:de,clearcoat:$,clearcoatMap:$e,clearcoatNormalMap:ne,clearcoatRoughnessMap:me,dispersion:Q,iridescence:Z,iridescenceMap:Re,iridescenceThicknessMap:Ce,sheen:Me,sheenColorMap:ge,sheenRoughnessMap:Be,specularMap:C,specularColorMap:K,specularIntensityMap:A,transmission:ae,transmissionMap:ee,thicknessMap:F,gradientMap:Y,opaque:g.transparent===!1&&g.blending===Ir&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:fe,alphaHash:He,combine:g.combine,mapUv:Je&&f(g.map.channel),aoMapUv:It&&f(g.aoMap.channel),lightMapUv:Ve&&f(g.lightMap.channel),bumpMapUv:qe&&f(g.bumpMap.channel),normalMapUv:Te&&f(g.normalMap.channel),displacementMapUv:st&&f(g.displacementMap.channel),emissiveMapUv:Ae&&f(g.emissiveMap.channel),metalnessMapUv:w&&f(g.metalnessMap.channel),roughnessMapUv:y&&f(g.roughnessMap.channel),anisotropyMapUv:de&&f(g.anisotropyMap.channel),clearcoatMapUv:$e&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:ne&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:Be&&f(g.sheenRoughnessMap.channel),specularMapUv:C&&f(g.specularMap.channel),specularColorMapUv:K&&f(g.specularColorMap.channel),specularIntensityMapUv:A&&f(g.specularIntensityMap.channel),transmissionMapUv:ee&&f(g.transmissionMap.channel),thicknessMapUv:F&&f(g.thicknessMap.channel),alphaMapUv:se&&f(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Te||O),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!z.attributes.uv&&(Je||se),fog:!!J,useFog:g.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:je,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:Je&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Bn,flipSided:g.side===Vt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Qe&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&g.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function b(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let G in g.defines)S.push(G),S.push(g.defines[G]);return g.isRawShaderMaterial===!1&&(_(S,g),E(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function _(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function E(g,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),g.push(a.mask)}function L(g){let S=x[g.type],G;if(S){let V=wn[S];G=U_.clone(V.uniforms)}else G=g.uniforms;return G}function R(g,S){let G;for(let V=0,j=h.length;V<j;V++){let J=h[V];if(J.cacheKey===S){G=J,++G.usedTimes;break}}return G===void 0&&(G=new GS(i,S,g,s),h.push(G)),G}function T(g){if(--g.usedTimes===0){let S=h.indexOf(g);h[S]=h[h.length-1],h.pop(),g.destroy()}}function I(g){c.remove(g)}function X(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:L,acquireProgram:R,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:X}}function jS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function qS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,d,m,v,x,f){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:x,group:f},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=f),e++,p}function a(u,d,m,v,x,f){let p=o(u,d,m,v,x,f);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function c(u,d,m,v,x,f){let p=o(u,d,m,v,x,f);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||qS),n.length>1&&n.sort(d||Mp),r.length>1&&r.sort(d||Mp)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function $S(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Sp,i.set(n,[o])):r>=s.length?(o=new Sp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function YS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function ZS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var KS=0;function JS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function QS(i){let e=new YS,t=ZS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let r=new N,s=new pt,o=new pt;function a(l){let h=0,u=0,d=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let m=0,v=0,x=0,f=0,p=0,b=0,_=0,E=0,L=0,R=0,T=0;l.sort(JS);for(let X=0,g=l.length;X<g;X++){let S=l[X],G=S.color,V=S.intensity,j=S.distance,J=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=G.r*V,u+=G.g*V,d+=G.b*V;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],V);T++}else if(S.isDirectionalLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let W=S.shadow,H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=S.shadow.matrix,b++}n.directional[m]=z,m++}else if(S.isSpotLight){let z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(G).multiplyScalar(V),z.distance=j,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[x]=z;let W=S.shadow;if(S.map&&(n.spotLightMap[L]=S.map,L++,W.updateMatrices(S),S.castShadow&&R++),n.spotLightMatrix[x]=W.matrix,S.castShadow){let H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=J,E++}x++}else if(S.isRectAreaLight){let z=e.get(S);z.color.copy(G).multiplyScalar(V),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=z,f++}else if(S.isPointLight){let z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let W=S.shadow,H=t.get(S);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=S.shadow.matrix,_++}n.point[v]=z,v++}else if(S.isHemisphereLight){let z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(V),z.groundColor.copy(S.groundColor).multiplyScalar(V),n.hemi[p]=z,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==m||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==f||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==_||I.numSpotShadows!==E||I.numSpotMaps!==L||I.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=f,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=E+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,I.directionalLength=m,I.pointLength=v,I.spotLength=x,I.rectAreaLength=f,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=_,I.numSpotShadows=E,I.numSpotMaps=L,I.numLightProbes=T,n.version=KS++)}function c(l,h){let u=0,d=0,m=0,v=0,x=0,f=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let _=l[p];if(_.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),u++}else if(_.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),m++}else if(_.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),o.identity(),s.copy(_.matrixWorld),s.premultiply(f),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(f),x++}}}return{setup:a,setupView:c,state:n}}function bp(i){let e=new QS(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function eb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new bp(i),e.set(r,[a])):s>=o.length?(a=new bp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zh=class extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kh=class extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ib(i,e,t){let n=new js,r=new De,s=new De,o=new it,a=new Zh({depthPacking:jy}),c=new Kh,l={},h=t.maxTextureSize,u={[ui]:Vt,[Vt]:ui,[Bn]:Bn},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:tb,fragmentShader:nb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let v=new Wi;v.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new zt(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(R,T,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let X=i.getRenderTarget(),g=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),G=i.state;G.setBlending(hi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let V=p!==mn&&this.type===mn,j=p===mn&&this.type!==mn;for(let J=0,z=R.length;J<z;J++){let W=R[J],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let oe=H.getFrameExtents();if(r.multiply(oe),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||V===!0||j===!0){let ve=this.type!==mn?{minFilter:on,magFilter:on}:{};H.map!==null&&H.map.dispose(),H.map=new Hn(r.x,r.y,ve),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let he=H.getViewportCount();for(let ve=0;ve<he;ve++){let je=H.getViewport(ve);o.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),G.viewport(o),H.updateMatrices(W,ve),n=H.getFrustum(),E(T,I,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===mn&&b(H,I),H.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(X,g,S)};function b(R,T){let I=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,I,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,I,m,x,null)}function _(R,T,I,X){let g=null,S=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)g=S;else if(g=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let G=g.uuid,V=T.uuid,j=l[G];j===void 0&&(j={},l[G]=j);let J=j[V];J===void 0&&(J=g.clone(),j[V]=J,T.addEventListener("dispose",L)),g=J}if(g.visible=T.visible,g.wireframe=T.wireframe,X===mn?g.side=T.shadowSide!==null?T.shadowSide:T.side:g.side=T.shadowSide!==null?T.shadowSide:u[T.side],g.alphaMap=T.alphaMap,g.alphaTest=T.alphaTest,g.map=T.map,g.clipShadows=T.clipShadows,g.clippingPlanes=T.clippingPlanes,g.clipIntersection=T.clipIntersection,g.displacementMap=T.displacementMap,g.displacementScale=T.displacementScale,g.displacementBias=T.displacementBias,g.wireframeLinewidth=T.wireframeLinewidth,g.linewidth=T.linewidth,I.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let G=i.properties.get(g);G.light=I}return g}function E(R,T,I,X,g){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===mn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let V=e.update(R),j=R.material;if(Array.isArray(j)){let J=V.groups;for(let z=0,W=J.length;z<W;z++){let H=J[z],oe=j[H.materialIndex];if(oe&&oe.visible){let he=_(R,oe,X,g);R.onBeforeShadow(i,R,T,I,V,he,H),i.renderBufferDirect(I,null,V,he,R,H),R.onAfterShadow(i,R,T,I,V,he,H)}}}else if(j.visible){let J=_(R,j,X,g);R.onBeforeShadow(i,R,T,I,V,J,null),i.renderBufferDirect(I,null,V,J,R,null),R.onAfterShadow(i,R,T,I,V,J,null)}}let G=R.children;for(let V=0,j=G.length;V<j;V++)E(G[V],T,I,X,g)}function L(R){R.target.removeEventListener("dispose",L);for(let I in l){let X=l[I],g=R.target.uuid;g in X&&(X[g].dispose(),delete X[g])}}}var rb={[th]:nh,[ih]:oh,[rh]:ah,[Ur]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:Ur};function sb(i){function e(){let A=!1,ee=new it,F=null,Y=new it(0,0,0,0);return{setMask:function(se){F!==se&&!A&&(i.colorMask(se,se,se,se),F=se)},setLocked:function(se){A=se},setClear:function(se,fe,He,Qe,ut){ut===!0&&(se*=Qe,fe*=Qe,He*=Qe),ee.set(se,fe,He,Qe),Y.equals(ee)===!1&&(i.clearColor(se,fe,He,Qe),Y.copy(ee))},reset:function(){A=!1,F=null,Y.set(-1,0,0,0)}}}function t(){let A=!1,ee=!1,F=null,Y=null,se=null;return{setReversed:function(fe){ee=fe},setTest:function(fe){fe?ye(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(fe){F!==fe&&!A&&(i.depthMask(fe),F=fe)},setFunc:function(fe){if(ee&&(fe=rb[fe]),Y!==fe){switch(fe){case th:i.depthFunc(i.NEVER);break;case nh:i.depthFunc(i.ALWAYS);break;case ih:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case rh:i.depthFunc(i.EQUAL);break;case sh:i.depthFunc(i.GEQUAL);break;case oh:i.depthFunc(i.GREATER);break;case ah:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=fe}},setLocked:function(fe){A=fe},setClear:function(fe){se!==fe&&(i.clearDepth(fe),se=fe)},reset:function(){A=!1,F=null,Y=null,se=null}}}function n(){let A=!1,ee=null,F=null,Y=null,se=null,fe=null,He=null,Qe=null,ut=null;return{setTest:function(ze){A||(ze?ye(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(ze){ee!==ze&&!A&&(i.stencilMask(ze),ee=ze)},setFunc:function(ze,Mt,Ut){(F!==ze||Y!==Mt||se!==Ut)&&(i.stencilFunc(ze,Mt,Ut),F=ze,Y=Mt,se=Ut)},setOp:function(ze,Mt,Ut){(fe!==ze||He!==Mt||Qe!==Ut)&&(i.stencilOp(ze,Mt,Ut),fe=ze,He=Mt,Qe=Ut)},setLocked:function(ze){A=ze},setClear:function(ze){ut!==ze&&(i.clearStencil(ze),ut=ze)},reset:function(){A=!1,ee=null,F=null,Y=null,se=null,fe=null,He=null,Qe=null,ut=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,v=!1,x=null,f=null,p=null,b=null,_=null,E=null,L=null,R=new Ge(0,0,0),T=0,I=!1,X=null,g=null,S=null,G=null,V=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,z=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=z>=2);let H=null,oe={},he=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),je=new it().fromArray(he),Ze=new it().fromArray(ve);function q(A,ee,F,Y){let se=new Uint8Array(4),fe=i.createTexture();i.bindTexture(A,fe),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<F;He++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ee+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return fe}let te={};te[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),s.setFunc(Ur),Ve(!1),qe(Af),ye(i.CULL_FACE),P(hi);function ye(A){l[A]!==!0&&(i.enable(A),l[A]=!0)}function pe(A){l[A]!==!1&&(i.disable(A),l[A]=!1)}function Le(A,ee){return h[A]!==ee?(i.bindFramebuffer(A,ee),h[A]=ee,A===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ee),A===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ee(A,ee){let F=d,Y=!1;if(A){F=u.get(ee),F===void 0&&(F=[],u.set(ee,F));let se=A.textures;if(F.length!==se.length||F[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,He=se.length;fe<He;fe++)F[fe]=i.COLOR_ATTACHMENT0+fe;F.length=se.length,Y=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,Y=!0);Y&&i.drawBuffers(F)}function We(A){return m!==A?(i.useProgram(A),m=A,!0):!1}let Je={[Ui]:i.FUNC_ADD,[_y]:i.FUNC_SUBTRACT,[xy]:i.FUNC_REVERSE_SUBTRACT};Je[My]=i.MIN,Je[Sy]=i.MAX;let ke={[by]:i.ZERO,[wy]:i.ONE,[Ey]:i.SRC_COLOR,[Ql]:i.SRC_ALPHA,[Iy]:i.SRC_ALPHA_SATURATE,[Cy]:i.DST_COLOR,[Ay]:i.DST_ALPHA,[Ty]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[Py]:i.ONE_MINUS_DST_COLOR,[Ry]:i.ONE_MINUS_DST_ALPHA,[Dy]:i.CONSTANT_COLOR,[Ly]:i.ONE_MINUS_CONSTANT_COLOR,[Ny]:i.CONSTANT_ALPHA,[Uy]:i.ONE_MINUS_CONSTANT_ALPHA};function P(A,ee,F,Y,se,fe,He,Qe,ut,ze){if(A===hi){v===!0&&(pe(i.BLEND),v=!1);return}if(v===!1&&(ye(i.BLEND),v=!0),A!==yy){if(A!==x||ze!==I){if((f!==Ui||_!==Ui)&&(i.blendEquation(i.FUNC_ADD),f=Ui,_=Ui),ze)switch(A){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rf:i.blendFunc(i.ONE,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rf:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}p=null,b=null,E=null,L=null,R.set(0,0,0),T=0,x=A,I=ze}return}se=se||ee,fe=fe||F,He=He||Y,(ee!==f||se!==_)&&(i.blendEquationSeparate(Je[ee],Je[se]),f=ee,_=se),(F!==p||Y!==b||fe!==E||He!==L)&&(i.blendFuncSeparate(ke[F],ke[Y],ke[fe],ke[He]),p=F,b=Y,E=fe,L=He),(Qe.equals(R)===!1||ut!==T)&&(i.blendColor(Qe.r,Qe.g,Qe.b,ut),R.copy(Qe),T=ut),x=A,I=!1}function It(A,ee){A.side===Bn?pe(i.CULL_FACE):ye(i.CULL_FACE);let F=A.side===Vt;ee&&(F=!F),Ve(F),A.blending===Ir&&A.transparent===!1?P(hi):P(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),r.setMask(A.colorWrite);let Y=A.stencilWrite;o.setTest(Y),Y&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),st(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(A){X!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),X=A)}function qe(A){A!==gy?(ye(i.CULL_FACE),A!==g&&(A===Af?i.cullFace(i.BACK):A===vy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),g=A}function Te(A){A!==S&&(J&&i.lineWidth(A),S=A)}function st(A,ee,F){A?(ye(i.POLYGON_OFFSET_FILL),(G!==ee||V!==F)&&(i.polygonOffset(ee,F),G=ee,V=F)):pe(i.POLYGON_OFFSET_FILL)}function Ae(A){A?ye(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function w(A){A===void 0&&(A=i.TEXTURE0+j-1),H!==A&&(i.activeTexture(A),H=A)}function y(A,ee,F){F===void 0&&(H===null?F=i.TEXTURE0+j-1:F=H);let Y=oe[F];Y===void 0&&(Y={type:void 0,texture:void 0},oe[F]=Y),(Y.type!==A||Y.texture!==ee)&&(H!==F&&(i.activeTexture(F),H=F),i.bindTexture(A,ee||te[A]),Y.type=A,Y.texture=ee)}function O(){let A=oe[H];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $e(){try{i.texStorage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(A){je.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),je.copy(A))}function ge(A){Ze.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),Ze.copy(A))}function Be(A,ee){let F=c.get(ee);F===void 0&&(F=new WeakMap,c.set(ee,F));let Y=F.get(A);Y===void 0&&(Y=i.getUniformBlockIndex(ee,A.name),F.set(A,Y))}function C(A,ee){let Y=c.get(ee).get(A);a.get(ee)!==Y&&(i.uniformBlockBinding(ee,Y,A.__bindingPointIndex),a.set(ee,Y))}function K(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,oe={},h={},u=new WeakMap,d=[],m=null,v=!1,x=null,f=null,p=null,b=null,_=null,E=null,L=null,R=new Ge(0,0,0),T=0,I=!1,X=null,g=null,S=null,G=null,V=null,je.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ye,disable:pe,bindFramebuffer:Le,drawBuffers:Ee,useProgram:We,setBlending:P,setMaterial:It,setFlipSided:Ve,setCullFace:qe,setLineWidth:Te,setPolygonOffset:st,setScissorTest:Ae,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:me,texImage3D:Re,updateUBOMapping:Be,uniformBlockBinding:C,texStorage2D:$e,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Ce,viewport:ge,reset:K}}function wp(i,e,t,n){let r=ob(n);switch(t){case Op:return i*e;case Bp:return i*e;case zp:return i*e*2;case kp:return i*e/r.components*r.byteLength;case vu:return i*e/r.components*r.byteLength;case Vp:return i*e*2/r.components*r.byteLength;case yu:return i*e*2/r.components*r.byteLength;case Fp:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case _u:return i*e*4/r.components*r.byteLength;case _a:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(i,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(i,8)*Math.max(e,8)/2;case gh:case vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ba:case Lh:case Nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hp:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oh:case Fh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ob(i){switch(i){case yn:case Lp:return{byteLength:1,components:1};case Ws:case Np:case Ks:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case ki:case pu:case zn:return{byteLength:4,components:1};case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ab(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,y){return m?new OffscreenCanvas(w,y):Pa("canvas")}function x(w,y,O){let $=1,Q=Ae(w);if((Q.width>O||Q.height>O)&&($=O/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor($*Q.width),Me=Math.floor($*Q.height);u===void 0&&(u=v(Z,Me));let ae=y?v(Z,Me):u;return ae.width=Z,ae.height=Me,ae.getContext("2d").drawImage(w,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Me+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==on&&w.minFilter!==vn}function p(w){i.generateMipmap(w)}function b(w,y,O,$,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=y;if(y===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),y===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){let Me=Q?Ta:Xe.getTransfer($);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Me===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(w,y){let O;return w?y===null||y===ki||y===Br?O=i.DEPTH24_STENCIL8:y===zn?O=i.DEPTH32F_STENCIL8:y===Ws&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===Br?O=i.DEPTH_COMPONENT24:y===zn?O=i.DEPTH_COMPONENT32F:y===Ws&&(O=i.DEPTH_COMPONENT16),O}function E(w,y){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==on&&w.minFilter!==vn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){let y=w.target;y.removeEventListener("dispose",L),T(y),y.isVideoTexture&&h.delete(y)}function R(w){let y=w.target;y.removeEventListener("dispose",R),X(y)}function T(w){let y=n.get(w);if(y.__webglInit===void 0)return;let O=w.source,$=d.get(O);if($){let Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(w),Object.keys($).length===0&&d.delete(O)}n.remove(w)}function I(w){let y=n.get(w);i.deleteTexture(y.__webglTexture);let O=w.source,$=d.get(O);delete $[y.__cacheKey],o.memory.textures--}function X(w){let y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)i.deleteFramebuffer(y.__webglFramebuffer[$]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=w.textures;for(let $=0,Q=O.length;$<Q;$++){let Z=n.get(O[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(w)}let g=0;function S(){g=0}function G(){let w=g;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),g+=1,w}function V(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function j(w,y){let O=n.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(O,w,y);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function J(w,y){let O=n.get(w);if(w.version>0&&O.__version!==w.version){Ze(O,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function z(w,y){let O=n.get(w);if(w.version>0&&O.__version!==w.version){Ze(O,w,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function W(w,y){let O=n.get(w);if(w.version>0&&O.__version!==w.version){q(O,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let H={[hh]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[uh]:i.MIRRORED_REPEAT},oe={[on]:i.NEAREST,[Wy]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Sl]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},he={[$y]:i.NEVER,[e_]:i.ALWAYS,[Yy]:i.LESS,[Wp]:i.LEQUAL,[Zy]:i.EQUAL,[Qy]:i.GEQUAL,[Ky]:i.GREATER,[Jy]:i.NOTEQUAL};function ve(w,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===vn||y.magFilter===Sl||y.magFilter===Ko||y.magFilter===zi||y.minFilter===vn||y.minFilter===Sl||y.minFilter===Ko||y.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Ko&&y.minFilter!==zi||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function je(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",L));let $=y.source,Q=d.get($);Q===void 0&&(Q={},d.set($,Q));let Z=V(y);if(Z!==w.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Z].usedTimes++;let Me=Q[w.__cacheKey];Me!==void 0&&(Q[w.__cacheKey].usedTimes--,Me.usedTimes===0&&I(y)),w.__cacheKey=Z,w.__webglTexture=Q[Z].texture}return O}function Ze(w,y,O){let $=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=i.TEXTURE_3D);let Q=je(w,y),Z=y.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+O);let Me=n.get(Z);if(Z.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let ae=Xe.getPrimaries(Xe.workingColorSpace),de=y.colorSpace===li?null:Xe.getPrimaries(y.colorSpace),$e=y.colorSpace===li||ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ne=x(y.image,!1,r.maxTextureSize);ne=st(y,ne);let me=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),Ce=b(y.internalFormat,me,Re,y.colorSpace,y.isVideoTexture);ve($,y);let ge,Be=y.mipmaps,C=y.isVideoTexture!==!0,K=Me.__version===void 0||Q===!0,A=Z.dataReady,ee=E(y,ne);if(y.isDepthTexture)Ce=_(y.format===zr,y.type),K&&(C?t.texStorage2D(i.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,Re,null));else if(y.isDataTexture)if(Be.length>0){C&&K&&t.texStorage2D(i.TEXTURE_2D,ee,Ce,Be[0].width,Be[0].height);for(let F=0,Y=Be.length;F<Y;F++)ge=Be[F],C?A&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(i.TEXTURE_2D,F,Ce,ge.width,ge.height,0,me,Re,ge.data);y.generateMipmaps=!1}else C?(K&&t.texStorage2D(i.TEXTURE_2D,ee,Ce,ne.width,ne.height),A&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Re,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,Re,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){C&&K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ce,Be[0].width,Be[0].height,ne.depth);for(let F=0,Y=Be.length;F<Y;F++)if(ge=Be[F],y.format!==Jt)if(me!==null)if(C){if(A)if(y.layerUpdates.size>0){let se=wp(ge.width,ge.height,y.format,y.type);for(let fe of y.layerUpdates){let He=ge.data.subarray(fe*se/ge.data.BYTES_PER_ELEMENT,(fe+1)*se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,fe,ge.width,ge.height,1,me,He,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,ne.depth,me,ge.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Ce,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?A&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,ge.width,ge.height,ne.depth,me,Re,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Ce,ge.width,ge.height,ne.depth,0,me,Re,ge.data)}else{C&&K&&t.texStorage2D(i.TEXTURE_2D,ee,Ce,Be[0].width,Be[0].height);for(let F=0,Y=Be.length;F<Y;F++)ge=Be[F],y.format!==Jt?me!==null?C?A&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?A&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(i.TEXTURE_2D,F,Ce,ge.width,ge.height,0,me,Re,ge.data)}else if(y.isDataArrayTexture)if(C){if(K&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ee,Ce,ne.width,ne.height,ne.depth),A)if(y.layerUpdates.size>0){let F=wp(ne.width,ne.height,y.format,y.type);for(let Y of y.layerUpdates){let se=ne.data.subarray(Y*F/ne.data.BYTES_PER_ELEMENT,(Y+1)*F/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ne.width,ne.height,1,me,Re,se)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(y.isData3DTexture)C?(K&&t.texStorage3D(i.TEXTURE_3D,ee,Ce,ne.width,ne.height,ne.depth),A&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(y.isFramebufferTexture){if(K)if(C)t.texStorage2D(i.TEXTURE_2D,ee,Ce,ne.width,ne.height);else{let F=ne.width,Y=ne.height;for(let se=0;se<ee;se++)t.texImage2D(i.TEXTURE_2D,se,Ce,F,Y,0,me,Re,null),F>>=1,Y>>=1}}else if(Be.length>0){if(C&&K){let F=Ae(Be[0]);t.texStorage2D(i.TEXTURE_2D,ee,Ce,F.width,F.height)}for(let F=0,Y=Be.length;F<Y;F++)ge=Be[F],C?A&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,me,Re,ge):t.texImage2D(i.TEXTURE_2D,F,Ce,me,Re,ge);y.generateMipmaps=!1}else if(C){if(K){let F=Ae(ne);t.texStorage2D(i.TEXTURE_2D,ee,Ce,F.width,F.height)}A&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,Re,ne);f(y)&&p($),Me.__version=Z.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function q(w,y,O){if(y.image.length!==6)return;let $=je(w,y),Q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let Z=n.get(Q);if(Q.version!==Z.__version||$===!0){t.activeTexture(i.TEXTURE0+O);let Me=Xe.getPrimaries(Xe.workingColorSpace),ae=y.colorSpace===li?null:Xe.getPrimaries(y.colorSpace),de=y.colorSpace===li||Me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let $e=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,me=[];for(let Y=0;Y<6;Y++)!$e&&!ne?me[Y]=x(y.image[Y],!0,r.maxCubemapSize):me[Y]=ne?y.image[Y].image:y.image[Y],me[Y]=st(y,me[Y]);let Re=me[0],Ce=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),Be=b(y.internalFormat,Ce,ge,y.colorSpace),C=y.isVideoTexture!==!0,K=Z.__version===void 0||$===!0,A=Q.dataReady,ee=E(y,Re);ve(i.TEXTURE_CUBE_MAP,y);let F;if($e){C&&K&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Be,Re.width,Re.height);for(let Y=0;Y<6;Y++){F=me[Y].mipmaps;for(let se=0;se<F.length;se++){let fe=F[se];y.format!==Jt?Ce!==null?C?A&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,fe.width,fe.height,Ce,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,fe.width,fe.height,Ce,ge,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Be,fe.width,fe.height,0,Ce,ge,fe.data)}}}else{if(F=y.mipmaps,C&&K){F.length>0&&ee++;let Y=Ae(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ee,Be,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ne){C?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,me[Y].width,me[Y].height,Ce,ge,me[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,me[Y].width,me[Y].height,0,Ce,ge,me[Y].data);for(let se=0;se<F.length;se++){let He=F[se].image[Y].image;C?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,He.width,He.height,Ce,ge,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Be,He.width,He.height,0,Ce,ge,He.data)}}else{C?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ce,ge,me[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Be,Ce,ge,me[Y]);for(let se=0;se<F.length;se++){let fe=F[se];C?A&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Ce,ge,fe.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Be,Ce,ge,fe.image[Y])}}}f(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function te(w,y,O,$,Q,Z){let Me=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),de=b(O.internalFormat,Me,ae,O.colorSpace);if(!n.get(y).__hasExternalTextures){let ne=Math.max(1,y.width>>Z),me=Math.max(1,y.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,de,ne,me,y.depth,0,Me,ae,null):t.texImage2D(Q,Z,de,ne,me,0,Me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),qe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(O).__webglTexture,0,Ve(y)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(O).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){let $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Z=_(y.stencilBuffer,Q),Me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Ve(y);qe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Z,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,w)}else{let $=y.textures;for(let Q=0;Q<$.length;Q++){let Z=$[Q],Me=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),de=b(Z.internalFormat,Me,ae,Z.colorSpace),$e=Ve(y);O&&qe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,de,y.width,y.height):qe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,de,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,de,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let $=n.get(y.depthTexture).__webglTexture,Q=Ve(y);if(y.depthTexture.format===Dr)qe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(y.depthTexture.format===zr)qe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Le(w){let y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pe(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=i.createRenderbuffer(),ye(y.__webglDepthbuffer[$],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ye(y.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(w,y,O){let $=n.get(w);y!==void 0&&te($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Le(w)}function We(w){let y=w.texture,O=n.get(w),$=n.get(y);w.addEventListener("dispose",R);let Q=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let de=0;de<y.mipmaps.length;de++)O.__webglFramebuffer[ae][de]=i.createFramebuffer()}else O.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ae=0,de=Q.length;ae<de;ae++){let $e=n.get(Q[ae]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&qe(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let de=Q[ae];O.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let $e=s.convert(de.format,de.colorSpace),ne=s.convert(de.type),me=b(de.internalFormat,$e,ne,de.colorSpace,w.isXRRenderTarget===!0),Re=Ve(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ve(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)te(O.__webglFramebuffer[ae][de],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else te(O.__webglFramebuffer[ae],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);f(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,de=Q.length;ae<de;ae++){let $e=Q[ae],ne=n.get($e);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),ve(i.TEXTURE_2D,$e),te(O.__webglFramebuffer,w,$e,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),f($e)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),ve(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let de=0;de<y.mipmaps.length;de++)te(O.__webglFramebuffer[de],w,y,i.COLOR_ATTACHMENT0,ae,de);else te(O.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,ae,0);f(y)&&p(ae),t.unbindTexture()}w.depthBuffer&&Le(w)}function Je(w){let y=w.textures;for(let O=0,$=y.length;O<$;O++){let Q=y[O];if(f(Q)){let Z=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(Q).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}let ke=[],P=[];function It(w){if(w.samples>0){if(qe(w)===!1){let y=w.textures,O=w.width,$=w.height,Q=i.COLOR_BUFFER_BIT,Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(w),ae=y.length>1;if(ae)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<y.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let $e=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$e,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,Q,i.NEAREST),c===!0&&(ke.length=0,P.length=0,ke.push(i.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ke.push(Z),P.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);let $e=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,$e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ve(w){return Math.min(r.maxSamples,w.samples)}function qe(w){let y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Te(w){let y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function st(w,y){let O=w.colorSpace,$=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==di&&O!==li&&(Xe.getTransfer(O)===ht?($!==Jt||Q!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=Ee,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=te,this.useMultisampledRTT=qe}function cb(i,e){function t(n,r=li){let s,o=Xe.getTransfer(r);if(n===yn)return i.UNSIGNED_BYTE;if(n===mu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Up)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return i.BYTE;if(n===Np)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===pu)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Op)return i.ALPHA;if(n===Fp)return i.RGB;if(n===Jt)return i.RGBA;if(n===Bp)return i.LUMINANCE;if(n===zp)return i.LUMINANCE_ALPHA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===kp)return i.RED;if(n===vu)return i.RED_INTEGER;if(n===Vp)return i.RG;if(n===yu)return i.RG_INTEGER;if(n===_u)return i.RGBA_INTEGER;if(n===_a||n===xa||n===Ma||n===Sa)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dh||n===fh||n===ph||n===mh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===vh||n===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gh||n===vh)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_h||n===xh||n===Mh||n===Sh||n===bh||n===wh||n===Eh||n===Th||n===Ah||n===Rh||n===Ch||n===Ph||n===Ih||n===Dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_h)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ph)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ih)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dh)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Lh||n===Nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hp||n===Uh||n===Oh||n===Fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Jh=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Pr=class extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lb={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let f=t.getJointPose(x,n),p=this._getHandJoint(l,x);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new qn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:hb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends cn{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,v=null,x=new Qh,f=t.getContextAttributes(),p=null,b=null,_=[],E=[],L=new De,R=null,T=new xt;T.layers.enable(1),T.viewport=new it;let I=new xt;I.layers.enable(2),I.viewport=new it;let X=[T,I],g=new Jh;g.layers.enable(1),g.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=_[q];return te===void 0&&(te=new Gs,_[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=_[q];return te===void 0&&(te=new Gs,_[q]=te),te.getGripSpace()},this.getHand=function(q){let te=_[q];return te===void 0&&(te=new Gs,_[q]=te),te.getHandSpace()};function V(q){let te=E.indexOf(q.inputSource);if(te===-1)return;let ye=_[te];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let q=0;q<_.length;q++){let te=E[q];te!==null&&(E[q]=null,_[q].disconnect(te))}S=null,G=null,x.reset(),e.setRenderTarget(p),m=null,d=null,u=null,r=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=function(q){return Kr(this,null,function*(){if(r=q,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){let te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,ye=null,pe=null;f.depth&&(pe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?zr:Dr,ye=f.stencil?Br:ki);let Le={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Hn(d.textureWidth,d.textureHeight,{format:Jt,type:yn,depthTexture:new ka(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(q){for(let te=0;te<q.removed.length;te++){let ye=q.removed[te],pe=E.indexOf(ye);pe>=0&&(E[pe]=null,_[pe].disconnect(ye))}for(let te=0;te<q.added.length;te++){let ye=q.added[te],pe=E.indexOf(ye);if(pe===-1){for(let Ee=0;Ee<_.length;Ee++)if(Ee>=E.length){E.push(ye),pe=Ee;break}else if(E[Ee]===null){E[Ee]=ye,pe=Ee;break}if(pe===-1)break}let Le=_[pe];Le&&Le.connect(ye)}}let z=new N,W=new N;function H(q,te,ye){z.setFromMatrixPosition(te.matrixWorld),W.setFromMatrixPosition(ye.matrixWorld);let pe=z.distanceTo(W),Le=te.projectionMatrix.elements,Ee=ye.projectionMatrix.elements,We=Le[14]/(Le[10]-1),Je=Le[14]/(Le[10]+1),ke=(Le[9]+1)/Le[5],P=(Le[9]-1)/Le[5],It=(Le[8]-1)/Le[0],Ve=(Ee[8]+1)/Ee[0],qe=We*It,Te=We*Ve,st=pe/(-It+Ve),Ae=st*-It;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ae),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Le[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let w=We+st,y=Je+st,O=qe-Ae,$=Te+(pe-Ae),Q=ke*Je/y*w,Z=P*Je/y*w;q.projectionMatrix.makePerspective(O,$,Q,Z,w,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let te=q.near,ye=q.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),g.near=I.near=T.near=te,g.far=I.far=T.far=ye,(S!==g.near||G!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,G=g.far);let pe=q.parent,Le=g.cameras;oe(g,pe);for(let Ee=0;Ee<Le.length;Ee++)oe(Le[Ee],pe);Le.length===2?H(g,T,I):g.projectionMatrix.copy(T.projectionMatrix),he(q,g,pe)};function he(q,te,ye){ye===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let ve=null;function je(q,te){if(h=te.getViewerPose(l||o),v=te,h!==null){let ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let pe=!1;ye.length!==g.cameras.length&&(g.cameras.length=0,pe=!0);for(let Ee=0;Ee<ye.length;Ee++){let We=ye[Ee],Je=null;if(m!==null)Je=m.getViewport(We);else{let P=u.getViewSubImage(d,We);Je=P.viewport,Ee===0&&(e.setRenderTargetTextures(b,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(b))}let ke=X[Ee];ke===void 0&&(ke=new xt,ke.layers.enable(Ee),ke.viewport=new it,X[Ee]=ke),ke.matrix.fromArray(We.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(We.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Ee===0&&(g.matrix.copy(ke.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),pe===!0&&g.cameras.push(ke)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){let Ee=u.getDepthInformation(ye[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,r.renderState)}}for(let ye=0;ye<_.length;ye++){let pe=E[ye],Le=_[ye];pe!==null&&Le!==void 0&&Le.update(pe,te,l||o)}ve&&ve(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}let Ze=new Yp;Ze.setAnimationLoop(je),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}},Li=new Hi,db=new pt;function fb(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,$p(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,b,_,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,E)):p.isMeshMatcapMaterial?(s(f,p),v(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),x(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,b,_):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Vt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Vt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,E=b.envMapRotation;_&&(f.envMap.value=_,Li.copy(E),Li.x*=-1,Li.y*=-1,Li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),f.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(Li)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,b,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*b,f.scale.value=_*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,b){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){let b=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pb(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let E=_.program;n.uniformBlockBinding(b,E)}function l(b,_){let E=r[b.id];E===void 0&&(v(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",f));let L=_.program;n.updateUBOMapping(b,L);let R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function h(b){let _=u();b.__bindingPointIndex=_;let E=i.createBuffer(),L=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=r[b.id],E=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,T=E.length;R<T;R++){let I=Array.isArray(E[R])?E[R]:[E[R]];for(let X=0,g=I.length;X<g;X++){let S=I[X];if(m(S,R,X,L)===!0){let G=S.__offset,V=Array.isArray(S.value)?S.value:[S.value],j=0;for(let J=0;J<V.length;J++){let z=V[J],W=x(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+j,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,j),j+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,_,E,L){let R=b.value,T=_+"_"+E;if(L[T]===void 0)return typeof R=="number"||typeof R=="boolean"?L[T]=R:L[T]=R.clone(),!0;{let I=L[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function v(b){let _=b.uniforms,E=0,L=16;for(let T=0,I=_.length;T<I;T++){let X=Array.isArray(_[T])?_[T]:[_[T]];for(let g=0,S=X.length;g<S;g++){let G=X[g],V=Array.isArray(G.value)?G.value:[G.value];for(let j=0,J=V.length;j<J;j++){let z=V[j],W=x(z),H=E%L,oe=H%W.boundary,he=H+oe;E+=oe,he!==0&&L-he<W.storage&&(E+=L-he),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=W.storage}}}let R=E%L;return R>0&&(E+=L-R),b.__size=E,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function f(b){let _=b.target;_.removeEventListener("dispose",f);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var Va=class{constructor(e={}){let{canvas:t=v_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),v=new Int32Array(4),x=null,f=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=En,this.toneMappingExposure=1;let _=this,E=!1,L=0,R=0,T=null,I=-1,X=null,g=new it,S=new it,G=null,V=new Ge(0),j=0,J=t.width,z=t.height,W=1,H=null,oe=null,he=new it(0,0,J,z),ve=new it(0,0,J,z),je=!1,Ze=new js,q=!1,te=!1,ye=new pt,pe=new pt,Le=new N,Ee=new it,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function ke(){return T===null?W:1}let P=n;function It(M,D){return t.getContext(M,D)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",fe,!1),P===null){let D="webgl2";if(P=It(D,M),P===null)throw It(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ve,qe,Te,st,Ae,w,y,O,$,Q,Z,Me,ae,de,$e,ne,me,Re,Ce,ge,Be,C,K,A;function ee(){Ve=new PM(P),Ve.init(),C=new cb(P,Ve),qe=new wM(P,Ve,e,C),Te=new sb(P),qe.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),st=new LM(P),Ae=new jS,w=new ab(P,Ve,Te,Ae,qe,C,st),y=new TM(_),O=new CM(_),$=new k_(P),K=new SM(P,$),Q=new IM(P,$,st,K),Z=new UM(P,Q,$,st),Ce=new NM(P,qe,w),ne=new EM(Ae),Me=new XS(_,y,O,Ve,qe,K,ne),ae=new fb(_,Ae),de=new $S,$e=new eb(Ve),Re=new MM(_,y,O,Te,Z,d,c),me=new ib(_,Z,qe),A=new pb(P,st,qe,Te),ge=new bM(P,Ve,st),Be=new DM(P,Ve,st),st.programs=Me.programs,_.capabilities=qe,_.extensions=Ve,_.properties=Ae,_.renderLists=de,_.shadowMap=me,_.state=Te,_.info=st}ee();let F=new eu(_,P);this.xr=F,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(J,z,!1))},this.getSize=function(M){return M.set(J,z)},this.setSize=function(M,D,B=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,z=D,t.width=Math.floor(M*W),t.height=Math.floor(D*W),B===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(J*W,z*W).floor()},this.setDrawingBufferSize=function(M,D,B){J=M,z=D,W=B,t.width=Math.floor(M*B),t.height=Math.floor(D*B),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(g)},this.getViewport=function(M){return M.copy(he)},this.setViewport=function(M,D,B,k){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,D,B,k),Te.viewport(g.copy(he).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,D,B,k){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,D,B,k),Te.scissor(S.copy(ve).multiplyScalar(W).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Te.setScissorTest(je=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(M=!0,D=!0,B=!0){let k=0;if(M){let U=!1;if(T!==null){let ie=T.texture.format;U=ie===_u||ie===yu||ie===vu}if(U){let ie=T.texture.type,ue=ie===yn||ie===ki||ie===Ws||ie===Br||ie===mu||ie===gu,_e=Re.getClearColor(),xe=Re.getClearAlpha(),Pe=_e.r,Ie=_e.g,Se=_e.b;ue?(m[0]=Pe,m[1]=Ie,m[2]=Se,m[3]=xe,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Pe,v[1]=Ie,v[2]=Se,v[3]=xe,P.clearBufferiv(P.COLOR,0,v))}else k|=P.COLOR_BUFFER_BIT}D&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),de.dispose(),$e.dispose(),Ae.dispose(),y.dispose(),O.dispose(),Z.dispose(),K.dispose(),A.dispose(),Me.dispose(),F.dispose(),F.removeEventListener("sessionstart",fi),F.removeEventListener("sessionend",ku),pi.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let M=st.autoReset,D=me.enabled,B=me.autoUpdate,k=me.needsUpdate,U=me.type;ee(),st.autoReset=M,me.enabled=D,me.autoUpdate=B,me.needsUpdate=k,me.type=U}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){let D=M.target;D.removeEventListener("dispose",He),Qe(D)}function Qe(M){ut(M),Ae.remove(M)}function ut(M){let D=Ae.get(M).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,B,k,U,ie){D===null&&(D=We);let ue=U.isMesh&&U.matrixWorld.determinant()<0,_e=Bm(M,D,B,k,U);Te.setMaterial(k,ue);let xe=B.index,Pe=1;if(k.wireframe===!0){if(xe=Q.getWireframeAttribute(B),xe===void 0)return;Pe=2}let Ie=B.drawRange,Se=B.attributes.position,rt=Ie.start*Pe,lt=(Ie.start+Ie.count)*Pe;ie!==null&&(rt=Math.max(rt,ie.start*Pe),lt=Math.min(lt,(ie.start+ie.count)*Pe)),xe!==null?(rt=Math.max(rt,0),lt=Math.min(lt,xe.count)):Se!=null&&(rt=Math.max(rt,0),lt=Math.min(lt,Se.count));let mt=lt-rt;if(mt<0||mt===1/0)return;K.setup(U,k,_e,B,xe);let Ht,et=ge;if(xe!==null&&(Ht=$.get(xe),et=Be,et.setIndex(Ht)),U.isMesh)k.wireframe===!0?(Te.setLineWidth(k.wireframeLinewidth*ke()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(U.isLine){let be=k.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*ke()),U.isLineSegments?et.setMode(P.LINES):U.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else U.isPoints?et.setMode(P.POINTS):U.isSprite&&et.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let be=U._multiDrawStarts,Ct=U._multiDrawCounts,tt=U._multiDrawCount,ln=xe?$.get(xe).bytesPerElement:1,Yi=Ae.get(k).currentProgram.getUniforms();for(let Gt=0;Gt<tt;Gt++)Yi.setValue(P,"_gl_DrawID",Gt),et.render(be[Gt]/ln,Ct[Gt])}else if(U.isInstancedMesh)et.renderInstances(rt,mt,U.count);else if(B.isInstancedBufferGeometry){let be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ct=Math.min(B.instanceCount,be);et.renderInstances(rt,mt,Ct)}else et.render(rt,mt)};function ze(M,D,B){M.transparent===!0&&M.side===Bn&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,uo(M,D,B),M.side=ui,M.needsUpdate=!0,uo(M,D,B),M.side=Bn):uo(M,D,B)}this.compile=function(M,D,B=null){B===null&&(B=M),f=$e.get(B),f.init(D),b.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==B&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let k=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let _e=ie[ue];ze(_e,B,U),k.add(_e)}else ze(ie,B,U),k.add(ie)}),b.pop(),f=null,k},this.compileAsync=function(M,D,B=null){let k=this.compile(M,D,B);return new Promise(U=>{function ie(){if(k.forEach(function(ue){Ae.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){U(M);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Mt=null;function Ut(M){Mt&&Mt(M)}function fi(){pi.stop()}function ku(){pi.start()}let pi=new Yp;pi.setAnimationLoop(Ut),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(M){Mt=M,F.setAnimationLoop(M),M===null?pi.stop():pi.start()},F.addEventListener("sessionstart",fi),F.addEventListener("sessionend",ku),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(D),D=F.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,D,T),f=$e.get(M,b.length),f.init(D),b.push(f),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(pe),te=this.localClippingEnabled,q=ne.init(this.clippingPlanes,te),x=de.get(M,p.length),x.init(),p.push(x),F.enabled===!0&&F.isPresenting===!0){let ie=_.xr.getDepthSensingMesh();ie!==null&&sc(ie,D,-1/0,_.sortObjects)}sc(M,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(H,oe),Je=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,Je&&Re.addToRenderList(x,M),this.info.render.frame++,q===!0&&ne.beginShadows();let B=f.state.shadowsArray;me.render(B,M,D),q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=x.opaque,U=x.transmissive;if(f.setupLights(),D.isArrayCamera){let ie=D.cameras;if(U.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){let xe=ie[ue];Hu(k,U,M,xe)}Je&&Re.render(M);for(let ue=0,_e=ie.length;ue<_e;ue++){let xe=ie[ue];Vu(x,M,xe,xe.viewport)}}else U.length>0&&Hu(k,U,M,D),Je&&Re.render(M),Vu(x,M,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(_,M,D),K.resetDefaultState(),I=-1,X=null,b.pop(),b.length>0?(f=b[b.length-1],q===!0&&ne.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function sc(M,D,B,k){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ze.intersectsSprite(M)){k&&Ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);let ue=Z.update(M),_e=M.material;_e.visible&&x.push(M,ue,_e,B,Ee.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ze.intersectsObject(M))){let ue=Z.update(M),_e=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ee.copy(M.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ee.copy(ue.boundingSphere.center)),Ee.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(_e)){let xe=ue.groups;for(let Pe=0,Ie=xe.length;Pe<Ie;Pe++){let Se=xe[Pe],rt=_e[Se.materialIndex];rt&&rt.visible&&x.push(M,ue,rt,B,Ee.z,Se)}}else _e.visible&&x.push(M,ue,_e,B,Ee.z,null)}}let ie=M.children;for(let ue=0,_e=ie.length;ue<_e;ue++)sc(ie[ue],D,B,k)}function Vu(M,D,B,k){let U=M.opaque,ie=M.transmissive,ue=M.transparent;f.setupLightsView(B),q===!0&&ne.setGlobalState(_.clippingPlanes,B),k&&Te.viewport(g.copy(k)),U.length>0&&ho(U,D,B),ie.length>0&&ho(ie,D,B),ue.length>0&&ho(ue,D,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Hu(M,D,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Hn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ks:yn,minFilter:zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ie=f.state.transmissionRenderTarget[k.id],ue=k.viewport||g;ie.setSize(ue.z,ue.w);let _e=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(V),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Je&&Re.render(B);let xe=_.toneMapping;_.toneMapping=En;let Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),q===!0&&ne.setGlobalState(_.clippingPlanes,k),ho(M,B,k),w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Se=0,rt=D.length;Se<rt;Se++){let lt=D[Se],mt=lt.object,Ht=lt.geometry,et=lt.material,be=lt.group;if(et.side===Bn&&mt.layers.test(k.layers)){let Ct=et.side;et.side=Vt,et.needsUpdate=!0,Gu(mt,B,k,Ht,et,be),et.side=Ct,et.needsUpdate=!0,Ie=!0}}Ie===!0&&(w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie))}_.setRenderTarget(_e),_.setClearColor(V,j),Pe!==void 0&&(k.viewport=Pe),_.toneMapping=xe}function ho(M,D,B){let k=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=M.length;U<ie;U++){let ue=M[U],_e=ue.object,xe=ue.geometry,Pe=k===null?ue.material:k,Ie=ue.group;_e.layers.test(B.layers)&&Gu(_e,D,B,xe,Pe,Ie)}}function Gu(M,D,B,k,U,ie){M.onBeforeRender(_,D,B,k,U,ie),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,D,B,k,M,ie),U.transparent===!0&&U.side===Bn&&U.forceSinglePass===!1?(U.side=Vt,U.needsUpdate=!0,_.renderBufferDirect(B,D,k,U,M,ie),U.side=ui,U.needsUpdate=!0,_.renderBufferDirect(B,D,k,U,M,ie),U.side=Bn):_.renderBufferDirect(B,D,k,U,M,ie),M.onAfterRender(_,D,B,k,U,ie)}function uo(M,D,B){D.isScene!==!0&&(D=We);let k=Ae.get(M),U=f.state.lights,ie=f.state.shadowsArray,ue=U.state.version,_e=Me.getParameters(M,U.state,ie,D,B),xe=Me.getProgramCacheKey(_e),Pe=k.programs;k.environment=M.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(M.isMeshStandardMaterial?O:y).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",He),Pe=new Map,k.programs=Pe);let Ie=Pe.get(xe);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ue)return Xu(M,_e),Ie}else _e.uniforms=Me.getUniforms(M),M.onBeforeCompile(_e,_),Ie=Me.acquireProgram(_e,xe),Pe.set(xe,Ie),k.uniforms=_e.uniforms;let Se=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=ne.uniform),Xu(M,_e),k.needsLights=km(M),k.lightsStateVersion=ue,k.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Wu(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Nr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Xu(M,D){let B=Ae.get(M);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Bm(M,D,B,k,U){D.isScene!==!0&&(D=We),w.resetTextureUnits();let ie=D.fog,ue=k.isMeshStandardMaterial?D.environment:null,_e=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:di,xe=(k.isMeshStandardMaterial?O:y).get(k.envMap||ue),Pe=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!B.morphAttributes.position,rt=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color,mt=En;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(mt=_.toneMapping);let Ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,et=Ht!==void 0?Ht.length:0,be=Ae.get(k),Ct=f.state.lights;if(q===!0&&(te===!0||M!==X)){let Qt=M===X&&k.id===I;ne.setState(k,M,Qt)}let tt=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ct.state.version||be.outputColorSpace!==_e||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==xe||k.fog===!0&&be.fog!==ie||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==Ie||be.morphTargets!==Se||be.morphNormals!==rt||be.morphColors!==lt||be.toneMapping!==mt||be.morphTargetsCount!==et)&&(tt=!0):(tt=!0,be.__version=k.version);let ln=be.currentProgram;tt===!0&&(ln=uo(k,D,U));let Yi=!1,Gt=!1,oc=!1,yt=ln.getUniforms(),Yn=be.uniforms;if(Te.useProgram(ln.program)&&(Yi=!0,Gt=!0,oc=!0),k.id!==I&&(I=k.id,Gt=!0),Yi||X!==M){qe.reverseDepthBuffer?(ye.copy(M.projectionMatrix),__(ye),x_(ye),yt.setValue(P,"projectionMatrix",ye)):yt.setValue(P,"projectionMatrix",M.projectionMatrix),yt.setValue(P,"viewMatrix",M.matrixWorldInverse);let Qt=yt.map.cameraPosition;Qt!==void 0&&Qt.setValue(P,Le.setFromMatrixPosition(M.matrixWorld)),qe.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,Gt=!0,oc=!0)}if(U.isSkinnedMesh){yt.setOptional(P,U,"bindMatrix"),yt.setOptional(P,U,"bindMatrixInverse");let Qt=U.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),yt.setValue(P,"boneTexture",Qt.boneTexture,w))}U.isBatchedMesh&&(yt.setOptional(P,U,"batchingTexture"),yt.setValue(P,"batchingTexture",U._matricesTexture,w),yt.setOptional(P,U,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",U._indirectTexture,w),yt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",U._colorsTexture,w));let ac=B.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&Ce.update(U,B,ln),(Gt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,yt.setValue(P,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Yn.envMap.value=xe,Yn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Yn.envMapIntensity.value=D.environmentIntensity),Gt&&(yt.setValue(P,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&zm(Yn,oc),ie&&k.fog===!0&&ae.refreshFogUniforms(Yn,ie),ae.refreshMaterialUniforms(Yn,k,W,z,f.state.transmissionRenderTarget[M.id]),Nr.upload(P,Wu(be),Yn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Nr.upload(P,Wu(be),Yn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(P,"center",U.center),yt.setValue(P,"modelViewMatrix",U.modelViewMatrix),yt.setValue(P,"normalMatrix",U.normalMatrix),yt.setValue(P,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Qt=k.uniformsGroups;for(let cc=0,Vm=Qt.length;cc<Vm;cc++){let ju=Qt[cc];A.update(ju,ln),A.bind(ju,ln)}}return ln}function zm(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function km(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,B){Ae.get(M.texture).__webglTexture=D,Ae.get(M.depthTexture).__webglTexture=B;let k=Ae.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let B=Ae.get(M);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,B=0){T=M,L=D,R=B;let k=!0,U=null,ie=!1,ue=!1;if(M){let xe=Ae.get(M);if(xe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(xe.__hasExternalTextures)w.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Se=M.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(M.width!==Se.image.width||M.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);let Ie=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?U=Ie[D][B]:U=Ie[D],ie=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?U=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[B]:U=Ie,g.copy(M.viewport),S.copy(M.scissor),G=M.scissorTest}else g.copy(he).multiplyScalar(W).floor(),S.copy(ve).multiplyScalar(W).floor(),G=je;if(Te.bindFramebuffer(P.FRAMEBUFFER,U)&&k&&Te.drawBuffers(M,U),Te.viewport(g),Te.scissor(S),Te.setScissorTest(G),ie){let xe=Ae.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,B)}else if(ue){let xe=Ae.get(M.texture),Pe=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Pe)}I=-1},this.readRenderTargetPixels=function(M,D,B,k,U,ie,ue){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){Te.bindFramebuffer(P.FRAMEBUFFER,_e);try{let xe=M.texture,Pe=xe.format,Ie=xe.type;if(!qe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-k&&B>=0&&B<=M.height-U&&P.readPixels(D,B,k,U,C.convert(Pe),C.convert(Ie),ie)}finally{let xe=T!==null?Ae.get(T).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=function(M,D,B,k,U,ie,ue){return Kr(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ue!==void 0&&(_e=_e[ue]),_e){let xe=M.texture,Pe=xe.format,Ie=xe.type;if(!qe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-k&&B>=0&&B<=M.height-U){Te.bindFramebuffer(P.FRAMEBUFFER,_e);let Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(D,B,k,U,C.convert(Pe),C.convert(Ie),0);let rt=T!==null?Ae.get(T).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,rt);let lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),yield y_(P,lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Se),P.deleteSync(lt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(M,D=null,B=0){M.isTexture!==!0&&(wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let k=Math.pow(2,-B),U=Math.floor(M.image.width*k),ie=Math.floor(M.image.height*k),ue=D!==null?D.x:0,_e=D!==null?D.y:0;w.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ue,_e,U,ie),Te.unbindTexture()},this.copyTextureToTexture=function(M,D,B=null,k=null,U=0){M.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let ie,ue,_e,xe,Pe,Ie;B!==null?(ie=B.max.x-B.min.x,ue=B.max.y-B.min.y,_e=B.min.x,xe=B.min.y):(ie=M.image.width,ue=M.image.height,_e=0,xe=0),k!==null?(Pe=k.x,Ie=k.y):(Pe=0,Ie=0);let Se=C.convert(D.format),rt=C.convert(D.type);w.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let lt=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ht=P.getParameter(P.UNPACK_SKIP_PIXELS),et=P.getParameter(P.UNPACK_SKIP_ROWS),be=P.getParameter(P.UNPACK_SKIP_IMAGES),Ct=M.isCompressedTexture?M.mipmaps[U]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Pe,Ie,ie,ue,Se,rt,Ct.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Pe,Ie,Ct.width,Ct.height,Se,Ct.data):P.texSubImage2D(P.TEXTURE_2D,U,Pe,Ie,ie,ue,Se,rt,Ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be),U===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,D,B=null,k=null,U=0){M.isTexture!==!0&&(wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,M=arguments[2],D=arguments[3],U=arguments[4]||0);let ie,ue,_e,xe,Pe,Ie,Se,rt,lt,mt=M.isCompressedTexture?M.mipmaps[U]:M.image;B!==null?(ie=B.max.x-B.min.x,ue=B.max.y-B.min.y,_e=B.max.z-B.min.z,xe=B.min.x,Pe=B.min.y,Ie=B.min.z):(ie=mt.width,ue=mt.height,_e=mt.depth,xe=0,Pe=0,Ie=0),k!==null?(Se=k.x,rt=k.y,lt=k.z):(Se=0,rt=0,lt=0);let Ht=C.convert(D.format),et=C.convert(D.type),be;if(D.isData3DTexture)w.setTexture3D(D,0),be=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Ct=P.getParameter(P.UNPACK_ROW_LENGTH),tt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Yi=P.getParameter(P.UNPACK_SKIP_ROWS),Gt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(be,U,Se,rt,lt,ie,ue,_e,Ht,et,mt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(be,U,Se,rt,lt,ie,ue,_e,Ht,mt.data):P.texSubImage3D(be,U,Se,rt,lt,ie,ue,_e,Ht,et,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),U===0&&D.generateMipmaps&&P.generateMipmap(be),Te.unbindTexture()},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){L=0,R=0,T=null,Te.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===xu?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Ka?"display-p3":"srgb"}};var qs=class extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Gr=class extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ya(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tu=class extends Wr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Df,endingEnd:Df}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lf:s=e,a=2*t-n;break;case Nf:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lf:o=e,c=2*n-t;break;case Nf:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,v=(n-t)/(r-t),x=v*v,f=x*v,p=-d*f+2*d*x-d*v,b=(1+d)*f+(-1.5-2*d)*x+(-.5+d)*v+1,_=(-1-m)*f+(1.5+m)*x+.5*v,E=m*f-m*x;for(let L=0;L!==a;++L)s[L]=p*o[h+L]+b*o[l+L]+_*o[c+L]+E*o[u+L];return s}},nu=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},iu=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ea:t=this.InterpolantFactoryMethodDiscrete;break;case Bh:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return Bh;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&mb(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===bl,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*n,d=u-n,m=u+n;for(let v=0;v!==n;++v){let x=t[u+v];if(x!==t[d+v]||x!==t[m+v]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Bh;var Xi=class extends xn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ea;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends xn{};ru.prototype.ValueTypeName="color";var su=class extends xn{};su.prototype.ValueTypeName="number";var ou=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)_n.slerpFlat(s,0,o,l-a,o,l,c);return s}},Ha=class extends xn{InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}};Ha.prototype.ValueTypeName="quaternion";Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends xn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ea;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends xn{};au.prototype.ValueTypeName="vector";var $s=class extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Kl=new pt,Ep=new N,Tp=new N,Ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cu=class extends Ga{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=kr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wa=class extends $s{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new cu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ap=new pt,zs=new N,Jl=new N,lu=class extends Ga{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),n.position.copy(zs),Jl.copy(n.position),Jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jl),n.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),Ap.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ap)}},Xa=class extends $s{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};var ja=class extends $s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var qa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Rp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Rp(){return performance.now()}var bu="\\[\\]\\.:\\/",gb=new RegExp("["+bu+"]","g"),wu="[^"+bu+"]",vb="[^"+bu.replace("\\.","")+"]",yb=/((?:WC+[\/:])*)/.source.replace("WC",wu),_b=/(WCOD+)?/.source.replace("WCOD",vb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),Mb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),Sb=new RegExp("^"+yb+_b+xb+Mb+"$"),bb=["material","materials","bones","map"],hu=class{constructor(e,t,n){let r=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gb,"")}static parseTrackName(t){let n=Sb.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);bb.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=hu,i})();_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zE=new Float32Array(1);var Cp=new pt,$a=class{constructor(e,t,n=0,r=1/0){this.ray=new Vr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Gn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cp),this}intersectObject(e,t=!0,n=[]){return uu(e,this,n,t),n.sort(Pp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)uu(e[r],this,n,t);return n.sort(Pp),n}};function Pp(i,e){return i.distance-e.distance}function uu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)uu(s[o],e,t,!0)}}var Ys=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function qr(i){i||(vo(qr),i=le(Jn));let e=new Jr(t=>i.onDestroy(t.next.bind(t)));return t=>t.pipe(Qi(e))}var Eu=class{constructor(e){this.source=e,this.destroyed=!1,this.destroyRef=le(Jn),this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(e){if(this.destroyed)throw new dt(953,!1);let t=this.source.pipe(qr(this.destroyRef)).subscribe({next:n=>e(n)});return{unsubscribe:()=>t.unsubscribe()}}};function em(i,e){return new Eu(i)}function Js(i,e,t){!e&&vo(i);let n=e??le(yi);return t?kt(n,t):n}function tm(i){return function(n={}){var r=n,{injector:e}=r,t=mi(r,["injector"]);return e=Js(this,e),kt(e,()=>le(i,t))}}function nm(i,e,t={}){let{deps:n=[],multi:r=!1,extraProviders:s=[],isFunctionValue:o=!1}=t;return(a,c=o)=>{let l;return typeof a<"u"?l={provide:i,useFactory:typeof a=="function"?c?()=>a:a:()=>a,multi:r}:l={provide:i,useFactory:e,deps:n,multi:r},[s,l]}}function Qs(i,e){let t=i.name||i.toString(),n=e??{isRoot:!0};if(n.isRoot??=!0,n.multi&&(n.isRoot=!1),n.isRoot){if(n.token)throw new Error(`createInjectionToken is creating a root InjectionToken but an external token is passed in.
`);let s=new ft(`Token for ${t}`,{factory:()=>n.deps&&Array.isArray(n.deps)?i(...n.deps.map(a=>(a=Array.isArray(a)?a.at(-1):a,le(a)))):i()}),o=tm(s);return[o,nm(s,i,n),s,()=>({provide:go,useValue:()=>o(),multi:!0})]}let r=n.token||new ft(`Token for ${t}`);return[tm(r),nm(r,i,n),r,()=>[]]}var wb={box:"content-box",scroll:!1,offsetSize:!1,debounce:{scroll:50,resize:0},emitInZone:!0,emitInitialResult:!1},[Eb,rm,cT]=Qs(()=>wb);var sm=(()=>{let e=class e{constructor(){this.ngxResizeOptions={},this.ngxResize=new xi,this.host=le(_i),this.zone=le(Xt),this.document=le(At),this.resizeOptions=Eb(),this.destroyRef=le(Jn)}ngOnInit(){let n=re(re({},this.resizeOptions),this.ngxResizeOptions);Tb(n,this.host.nativeElement,this.document,this.zone).pipe(qr(this.destroyRef)).subscribe(this.ngxResize)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=er({type:e,selectors:[["","ngxResize",""]],inputs:{ngxResizeOptions:"ngxResizeOptions"},outputs:{ngxResize:"ngxResize"},standalone:!0});let i=e;return i})();function Tb({debounce:i,scroll:e,offsetSize:t,box:n,emitInZone:r,emitInitialResult:s},o,a,c){let l=a.defaultView,h=!!l?.ResizeObserver,u,d,m=[],v=new po,x=om(o,l,a.body),f=i?typeof i=="number"?i:i.scroll:null,p=i?typeof i=="number"?i:i.resize:null,b=_=>fo(fc(_??0),Qi(v));return new Jr(_=>{if(!h){_.error("[ngx-resize] your browser does not support ResizeObserver. Please consider using a polyfill");return}return c.runOutsideAngular(()=>{if(s){let[R]=im(o,l,t,[]);r?c.run(()=>void _.next(R)):_.next(R)}let E=R=>{m=R;let[T,I]=im(o,l,t,R);r?c.run(()=>void _.next(T)):_.next(T),Rb(d||{},I)||(d=I)},L=()=>void E(m);u=new ResizeObserver(E),u.observe(o,{box:n}),e&&(x&&x.forEach(R=>{mo(R,"scroll",{capture:!0,passive:!0}).pipe(b(f)).subscribe(L)}),mo(l,"scroll",{capture:!0,passive:!0}).pipe(b(f)).subscribe(L)),mo(l,"resize").pipe(b(p)).subscribe(L)}),()=>{u&&(u.unobserve(o),u.disconnect()),v.next(),v.complete()}}).pipe(fc(f??0),ed({connector:()=>new po(1)}))}function im(i,e,t,n){let{left:r,top:s,width:o,height:a,bottom:c,right:l,x:h,y:u}=i.getBoundingClientRect(),d={left:r,top:s,width:o,height:a,bottom:c,right:l,x:h,y:u};return i instanceof HTMLElement&&t&&(d.height=i.offsetHeight,d.width=i.offsetWidth),Object.freeze(d),[re({entries:n,dpr:e.devicePixelRatio},d),d]}function om(i,e,t){let n=[];if(!i||!e||i===t)return n;let{overflow:r,overflowX:s,overflowY:o}=e.getComputedStyle(i);return[r,s,o].some(a=>a==="auto"||a==="scroll")&&n.push(i),[...n,...om(i.parentElement,e,t)]}var Ab=["x","y","top","bottom","left","right","width","height"],Rb=(i,e)=>Ab.every(t=>i[t]===e[t]);var am=["glCanvas"];var Cb="__ngt_signal_store_computed__";function Pb(i){return e=>{let t=typeof i=="function"?i(e):i;return Object.keys(t).forEach(n=>{let r=n;t[r]===void 0&&e[r]!=null&&(t[r]=e[r])}),t}}function cm(i){return e=>{let t=Pb(e);Tt(()=>{i.update(n=>re(re({},n),t(n)))})}}function lm(i){return(...e)=>{let t=Tt(i);return e.length===0?t:e.reduce((n,r)=>n[r],t)}}function hm(i,e){return(...t)=>{if(t.length===0)return i;if(t.length===1&&typeof t[0]=="object"){let a=Cb.concat(JSON.stringify(t[0]));return e.has(a)||e.set(a,Qn(i,t)),e.get(a)}let[n,r]=Ib(t),o=n.join("-").concat(JSON.stringify(r));return e.has(o)||e.set(o,Qn(()=>n.reduce((a,c)=>a[c],i()),r)),e.get(o)}}function Ib(i){return typeof i.at(-1)=="object"?[i.slice(0,-1),i.at(-1)]:[i,{equal:Object.is}]}function _m(i={},e){let t,n,r,s,o,a=new Map;e||(e={equal:Object.is}),typeof i=="function"?(t=In({},e),o=t.asReadonly(),r=lm(t),n=cm(t),s=hm(o,a),t.set(i({update:n,get:r,select:s}))):(t=In(i,e),o=t.asReadonly(),r=lm(t),n=cm(t),s=hm(o,a));let c={select:s,get:r,update:n,state:o};return Object.defineProperty(c,"snapshot",{get:Tt.bind({},o),configurable:!1,enumerable:!1}),c}var Ke={obj:i=>i===Object(i)&&!Array.isArray(i)&&typeof i!="function",material:i=>!!i&&i.isMaterial,geometry:i=>!!i&&i.isBufferGeometry,orthographicCamera:i=>!!i&&i.isOrthographicCamera,perspectiveCamera:i=>!!i&&i.isPerspectiveCamera,camera:i=>!!i&&i.isCamera,renderer:i=>!!i&&typeof i=="object"&&"render"in i&&typeof i.render=="function",scene:i=>!!i&&i.isScene,ref:i=>i instanceof _i,instance:i=>!!i&&!!i.__ngt__,object3D:i=>!!i&&i.isObject3D,colorSpaceExist:i=>"colorSpace"in i||"outputColorSpace"in i,equ(i,e,{arrays:t="shallow",objects:n="reference",strict:r=!0}={}){if(typeof i!=typeof e||!!i!=!!e)return!1;if(typeof i=="string"||typeof i=="number")return i===e;let s=Ke.obj(i);if(s&&n==="reference")return i===e;let o=Array.isArray(i);if(o&&t==="reference")return i===e;if((o||s)&&i===e)return!0;let a;for(a in i)if(!(a in e))return!1;for(a in r?e:i)if(i[a]!==e[a])return!1;if(a===void 0){if(o&&i.length===0&&e.length===0||s&&Object.keys(i).length===0&&Object.keys(e).length===0)return!0;if(i!==e)return!1}return!0}};function xm(i){i!==null&&Ke.obj(i)&&"needsUpdate"in i&&(i.needsUpdate=!0,"uniformsNeedUpdate"in i&&(i.uniformsNeedUpdate=!0))}function Lu(i){Ke.camera(i)&&((Ke.perspectiveCamera(i)||Ke.orthographicCamera(i))&&i.updateProjectionMatrix(),i.updateMatrixWorld()),!(i&&i.isCubeTexture)&&xm(i)}function um(i,e){i.manual||(Ke.orthographicCamera(i)?(i.left=e.width/-2,i.right=e.width/2,i.top=e.height/2,i.bottom=e.height/-2):i.aspect=e.width/e.height,i.updateProjectionMatrix(),i.updateMatrixWorld())}function Ye(i){if(i)return i.__ngt__}function io(i){let e=Ye(i)?.store;if(e){for(;e.snapshot.previousRoot;)e=e.snapshot.previousRoot;e.snapshot.internal.frames===0&&e.snapshot.invalidate()}Lu(i)}function ro(i,e){let t=i;if(e?.primitive||!t.__ngt__){let n=e||{},{instanceStore:r=_m({parent:null,objects:[],nonObjects:[],geometryStamp:Date.now()})}=n,s=mi(n,["instanceStore"]),o=r.select("nonObjects"),a=r.select("geometryStamp"),c=Qn(()=>{let[l]=[o(),a()];return l});t.__ngt__=re({previousAttach:null,store:null,memoized:{},eventCount:0,handlers:{},instanceStore:r,parent:r.select("parent"),objects:r.select("objects"),nonObjects:c,add(l,h){let u=t.__ngt__.instanceStore.snapshot[h],d=u.findIndex(m=>l===m||!!l.uuid&&!!m.uuid&&l.uuid===m.uuid);d>-1?(u.splice(d,1,l),t.__ngt__.instanceStore.update({[h]:u})):t.__ngt__.instanceStore.update(m=>({[h]:[...m[h],l]})),Nu(t.__ngt__.instanceStore.snapshot.parent,h)},remove(l,h){t.__ngt__.instanceStore.update(u=>({[h]:u[h].filter(d=>d!==l)})),Nu(t.__ngt__.instanceStore.snapshot.parent,h)},setParent(l){t.__ngt__.instanceStore.update({parent:l})},updateGeometryStamp(){t.__ngt__.instanceStore.update({geometryStamp:Date.now()})}},s)}return t}function Nu(i,e){if(!i)return;let t=Ye(i);if(!t)return;let{parent:n}=t.instanceStore.snapshot;t.instanceStore.update({[e]:(t.instanceStore.snapshot[e]||[]).slice()}),Nu(n,e)}var dm={};function to(i){if(i)return(i.eventObject||i.object).uuid+"/"+i.index+i.instanceId;let e=Xp.generateUUID();return dm[e]?to():(dm[e]=!0,e)}function Uu(i,e){let t=typeof e<"u"?e.devicePixelRatio??2:1;return Array.isArray(i)?Math.min(Math.max(i[0],t),i[1]):i}function Db(i,e){let t=typeof i=="function"?i(e):i;return Ke.renderer(t)?t:new Va(re({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0},i))}function Lb(i,e){return i?new jn(0,0,0,0,.1,1e3):new xt(75,e.width/e.height,.1,1e3)}function Nb(i){let e={nodes:{},materials:{}};return i&&i.traverse(t=>{t.name&&(e.nodes[t.name]=t),"material"in t&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function Mm(i,e,t,n){let r=t.get(e);r&&(t.delete(e),t.size===0&&(i.delete(n),r.target.releasePointerCapture(n)))}function Ub(i,e){let{internal:t}=i.snapshot;t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,r)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(r)}),t.capturedMap.forEach((n,r)=>{Mm(t.capturedMap,e,n,r)})}function Ob(i){function e(c){let l=i.get("internal"),h=c.offsetX-l.initialClick[0],u=c.offsetY-l.initialClick[1];return Math.round(Math.sqrt(h*h+u*u))}function t(c){return c.filter(l=>["move","over","enter","out","leave"].some(h=>{let u=`pointer${h}`;return Ye(l)?.handlers?.[u]}))}function n(c,l){let h=i.get(),u=new Set,d=[],m=l?l(h.internal.interaction):h.internal.interaction;for(let f=0;f<m.length;f++){let p=Ye(m[f])?.store.snapshot;p&&(p.raycaster.camera=void 0)}h.previousRoot||h.events.compute?.(c,i,null);function v(f){let p=Ye(f)?.store,b=p?.snapshot;return!b||!b.events.enabled||b.raycaster.camera===null?[]:(b.raycaster.camera===void 0&&(b.events.compute?.(c,p,b.previousRoot),b.raycaster.camera===void 0&&(b.raycaster.camera=null)),b.raycaster.camera?b.raycaster.intersectObject(f,!0):[])}let x=m.flatMap(v).sort((f,p)=>{let b=Ye(f.object)?.store.snapshot,_=Ye(p.object)?.store.snapshot;return!b||!_?f.distance-p.distance:_.events.priority-b.events.priority||f.distance-p.distance}).filter(f=>{let p=to(f);return u.has(p)?!1:(u.add(p),!0)});h.events.filter&&(x=h.events.filter(x,i));for(let f of x){let p=f.object;for(;p;)Ye(p)?.eventCount&&d.push(ct(re({},f),{eventObject:p})),p=p.parent}if("pointerId"in c&&h.internal.capturedMap.has(c.pointerId))for(let f of h.internal.capturedMap.get(c.pointerId).values())u.has(to(f.intersection))||d.push(f.intersection);return d}function r(c,l,h,u){let d=i.snapshot;if(c.length){let m={stopped:!1};for(let v of c){let{raycaster:x,pointer:f,camera:p,internal:b}=Ye(v.object)?.store.snapshot||d,_=new N(f.x,f.y,0).unproject(p),E=X=>b.capturedMap.get(X)?.has(v.eventObject)??!1,L=X=>{let g={intersection:v,target:l.target};b.capturedMap.has(X)?b.capturedMap.get(X).set(v.eventObject,g):b.capturedMap.set(X,new Map([[v.eventObject,g]])),l.target.setPointerCapture(X)},R=X=>{let g=b.capturedMap.get(X);g&&Mm(b.capturedMap,v.eventObject,g,X)},T={};for(let X in l){let g=l[X];typeof g!="function"&&(T[X]=g)}let I=ct(re(re({},v),T),{pointer:f,intersections:c,stopped:m.stopped,delta:h,unprojectedPoint:_,ray:x.ray,camera:p,stopPropagation(){let X="pointerId"in l&&b.capturedMap.get(l.pointerId);if((!X||X.has(v.eventObject))&&(I.stopped=m.stopped=!0,b.hovered.size&&Array.from(b.hovered.values()).find(g=>g.eventObject===v.eventObject))){let g=c.slice(0,c.indexOf(v));s([...g,v])}},target:{hasPointerCapture:E,setPointerCapture:L,releasePointerCapture:R},currentTarget:{hasPointerCapture:E,setPointerCapture:L,releasePointerCapture:R},nativeEvent:l});if(u(I),m.stopped)break}}return c}function s(c){let l=i.get("internal");for(let h of l.hovered.values())if(!c.length||!c.find(u=>u.object===h.object&&u.index===h.index&&u.instanceId===h.instanceId)){let u=h.eventObject,d=Ye(u),m=d?.handlers;if(l.hovered.delete(to(h)),d?.eventCount){let v=ct(re({},h),{intersections:c});m?.pointerout?.(v),m?.pointerleave?.(v)}}}function o(c,l){for(let h=0;h<l.length;h++)Ye(l[h])?.handlers.pointermissed?.(c)}function a(c){switch(c){case"pointerleave":case"pointercancel":return()=>s([]);case"lostpointercapture":return l=>{let{internal:h}=i.snapshot;"pointerId"in l&&h.capturedMap.has(l.pointerId)&&requestAnimationFrame(()=>{h.capturedMap.has(l.pointerId)&&(h.capturedMap.delete(l.pointerId),s([]))})}}return function(h){let u=i.pointerMissed$,d=i.get("internal");d.lastEvent.nativeElement=h;let m=c==="pointermove",v=c==="click"||c==="contextmenu"||c==="dblclick",f=n(h,m?t:void 0),p=v?e(h):0;c==="pointerdown"&&(d.initialClick=[h.offsetX,h.offsetY],d.initialHits=f.map(_=>_.eventObject)),v&&!f.length&&p<=2&&(o(h,d.interaction),u.next(h)),m&&s(f);function b(_){let E=_.eventObject,L=Ye(E),R=L?.handlers;if(L?.eventCount)if(m){if(R?.pointerover||R?.pointerenter||R?.pointerout||R?.pointerleave){let T=to(_),I=d.hovered.get(T);I?I.stopped&&_.stopPropagation():(d.hovered.set(T,_),R.pointerover?.(_),R.pointerenter?.(_))}R?.pointermove?.(_)}else{let T=R?.[c];T?(!v||d.initialHits.includes(E))&&(o(h,d.interaction.filter(I=>!d.initialHits.includes(I))),T(_)):v&&d.initialHits.includes(E)&&o(h,d.interaction.filter(I=>!d.initialHits.includes(I)))}}r(f,h,p,b)}}return{handlePointer:a}}var fm={click:!1,contextmenu:!1,dblclick:!1,wheel:!1,pointerdown:!0,pointerup:!0,pointerleave:!0,pointermove:!0,pointercancel:!0,lostpointercapture:!0};function Fb(i){let{handlePointer:e}=Ob(i);return{priority:1,enabled:!0,compute:(t,n)=>{let r=n.get();r.pointer.set(t.offsetX/r.size.width*2-1,-(t.offsetY/r.size.height)*2+1),r.raycaster.setFromCamera(r.pointer,r.camera)},connected:void 0,handlers:Object.keys(fm).reduce((t,n)=>(t[n]=e(n),t),{}),update:()=>{let{events:t,internal:n}=i.get();n.lastEvent?.nativeElement&&t.handlers&&t.handlers.pointermove(n.lastEvent.nativeElement)},connect:t=>{let n=i.get();n.events.disconnect?.(),n.setEvents({connected:t}),Object.entries(n.events.handlers??{}).forEach(([r,s])=>{let o=fm[r];t.addEventListener(r,s,{passive:o})})},disconnect:()=>{let{events:t,setEvents:n}=i.get();t.connected&&(Object.entries(t.handlers??{}).forEach(([r,s])=>{t.connected instanceof HTMLElement&&t.connected.removeEventListener(r,s)}),n({connected:void 0}))}}}var Sm="__ngt_renderer_is_routed_scene__",Bb="__ngt_renderer_is_html",zb="__ngt_renderer_is_non_root__",so="__ngt_renderer_add_comment__",Tu="__ngt_dom_parent__",Au={NGT_PORTAL:"ngt-portal",NGT_PRIMITIVE:"ngt-primitive",NGT_VALUE:"ngt-value"},$r={RENDER_PRIORITY:"priority",ATTACH:"attach",RAW_VALUE:"rawValue",PARAMETERS:"parameters"},Ru={BEFORE_RENDER:"beforeRender",UPDATED:"updated",ATTACHED:"attached"},kb=["added","removed","childadded","childremoved","disposed"],Fu=(()=>{let e=class e{constructor(){this.args=vt.required(),this.vcr=le(nr),this.template=le(ld),this.injected=!1,this.injectedArgs=null;let n=this.vcr.element.nativeElement;n[so]&&(n[so]("args"),delete n[so]),ir(()=>{let r=this.args();r==null||!Array.isArray(r)||r.length===1&&r[0]===null||(this.injected=!1,this.injectedArgs=r,Tt(()=>{this.createView()}))}),le(Jn).onDestroy(()=>{this.view?.destroy()})}get value(){return this.validate()?(this.injected=!0,this.injectedArgs):null}validate(){return!this.injected&&!!this.injectedArgs?.length}createView(){this.view&&!this.view.destroyed&&this.view.destroy(),this.view=this.vcr.createEmbeddedView(this.template),this.view.detectChanges()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=er({type:e,selectors:[["ng-template","args",""]],inputs:{args:[1,"args"]},standalone:!0});let i=e;return i})(),Zr=new Map;var Vb=new Set,Hb=new Set,Gb=new Set;function Cu(i,e){if(i.size)for(let{callback:t}of i.values())t(e)}function eo(i,e){switch(i){case"before":return Cu(Vb,e);case"after":return Cu(Hb,e);case"tail":return Cu(Gb,e)}}function Pu(i,e,t){let n=e.snapshot,r=n.clock.getDelta();n.frameloop==="never"&&typeof i=="number"&&(r=i-n.clock.elapsedTime,n.clock.oldTime=n.clock.elapsedTime,n.clock.elapsedTime=i);let s=n.internal.subscribers;for(let o=0;o<s.length;o++){let a=s[o];a.callback(ct(re({},a.store.snapshot),{delta:r,frame:t}))}return!n.internal.priority&&n.gl.render&&n.gl.render(n.scene,n.camera),n.internal.frames=Math.max(0,n.internal.frames-1),n.frameloop==="always"?1:n.internal.frames}function Wb(i){let e=!1,t,n,r=!1;function s(c){n=requestAnimationFrame(s),e=!0,t=0,eo("before",c),r=!0;for(let l of i.values()){let h=l.snapshot;h.internal.active&&(h.frameloop==="always"||h.internal.frames>0)&&!h.gl.xr?.isPresenting&&(t+=Pu(c,l))}if(r=!1,eo("after",c),t===0)return eo("tail",c),e=!1,cancelAnimationFrame(n)}function o(c,l=1){let h=c?.snapshot;if(!h)return i.forEach(u=>o(u,l));h.gl.xr?.isPresenting||!h.internal.active||h.frameloop==="never"||(l>1?h.internal.frames=Math.min(60,h.internal.frames+l):r?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(s)))}function a(c,l=!0,h,u){if(l&&eo("before",c),h)Pu(c,h,u);else for(let d of i.values())Pu(c,d);l&&eo("after",c)}return{loop:s,invalidate:o,advance:a}}var[bm]=Qs(()=>Wb(Zr));function Xb(i){let e=bm(),t=new An,n=_m(({get:a,update:c})=>{let{invalidate:l,advance:h}=e,u=new N,d=new N,m=new N;function v(b=a("camera"),_=d,E=a("size")){let{width:L,height:R,top:T,left:I}=E,X=L/R;_ instanceof N?m.copy(_):m.set(..._);let g=b.getWorldPosition(u).distanceTo(m);if(Ke.orthographicCamera(b))return{width:L/b.zoom,height:R/b.zoom,top:T,left:I,factor:1,distance:g,aspect:X};let S=b.fov*Math.PI/180,G=2*Math.tan(S/2)*g,V=G*(L/R);return{width:V,height:G,top:T,left:I,factor:L/V,distance:g,aspect:X}}let x,f=b=>c(_=>({performance:ct(re({},_.performance),{current:b})})),p=new De;return{pointerMissed$:t.asObservable(),events:{priority:1,enabled:!0,connected:!1},invalidate:(b=1)=>l(n,b),advance:(b,_)=>h(b,_,n),legacy:!1,linear:!1,flat:!1,controls:null,clock:new qa,pointer:p,frameloop:"always",performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let b=a();x&&clearTimeout(x),b.performance.current!==b.performance.min&&f(b.performance.min),x=setTimeout(()=>{f(a("performance","max"))},b.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:v},setEvents:b=>c(_=>ct(re({},_),{events:re(re({},_.events),b)})),setSize:(b,_,E,L)=>{let R=a("camera"),T={width:b,height:_,top:E||0,left:L||0};c(I=>({size:T,viewport:re(re({},I.viewport),v(R,d,T))}))},setDpr:b=>c(_=>{let E=Uu(b,window);return{viewport:ct(re({},_.viewport),{dpr:E,initialDpr:_.viewport.initialDpr||E})}}),setFrameloop:(b="always")=>{let _=a("clock");_.stop(),_.elapsedTime=0,b!=="never"&&(_.start(),_.elapsedTime=0),c(()=>({frameloop:b}))},previousRoot:i,internal:{active:!1,priority:0,frames:0,lastEvent:new _i(null),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(b,_=0,E=n)=>{let L=a("internal");return L.priority=L.priority+(_>0?1:0),L.subscribers.push({callback:b,priority:_,store:E}),L.subscribers=L.subscribers.sort((R,T)=>(R.priority||0)-(T.priority||0)),()=>{let R=a("internal");R?.subscribers&&(R.priority=R.priority-(_>0?1:0),R.subscribers=R.subscribers.filter(T=>T.callback!==b))}}}}});Object.defineProperty(n,"pointerMissed$",{get:()=>t});let{size:r,viewport:{dpr:s},camera:o}=n.snapshot;return ir(()=>{let{camera:a,size:c,viewport:{dpr:l},gl:h}=n.state();if(c!==r||l!==s){r=c,s=l,um(a,c),h.setPixelRatio(l);let u=typeof HTMLCanvasElement<"u"&&h.domElement instanceof HTMLCanvasElement;h.setSize(c.width,c.height,u)}a!==o&&(o=a,um(a,c),n.update(u=>({viewport:re(re({},u.viewport),u.viewport.getCurrentViewport(a))})))}),n}var tc=new ft("NgtStore Token");function wm(i){return i?{provide:tc,useFactory:i}:{provide:tc,useFactory:Xb}}function ao(i){return le(tc,i)}function jb(i,e){let t=Object.entries(e),n=[];for(let[r,s]of t){let o=r;Ke.colorSpaceExist(i)&&(r==="encoding"?o="colorSpace":r==="outputEncoding"&&(o="outputColorSpace")),!Ke.equ(s,i[o])&&n.push([r,s])}return n}var ec="__ngt_apply_props__";function Mn(i,e){if(!Object.keys(e).length)return i;let t=Ye(i),n=t?.store?.snapshot??i[ec]?.snapshot??{},r=jb(i,e);for(let a=0;a<r.length;a++){let[c,l]=r[a];if(Ke.colorSpaceExist(i)){let m="srgb",v="srgb-linear";c==="encoding"?(c="colorSpace",l=l===3001?m:v):c==="outputEncoding"&&(c="outputColorSpace",l=l===3001?m:v)}let h=i,u=h[c];if(u&&u.set&&(u.copy||u instanceof Gn)){let d=u instanceof Ge;if(Array.isArray(l))u.fromArray?u.fromArray(l):u.set(...l);else if(u.copy&&l&&l.constructor&&u.constructor.name===l.constructor.name)u.copy(l),!Xe&&!n.linear&&d&&u.convertSRGBToLinear();else if(l!==void 0){let m=u instanceof Ge;!m&&u.setScalar?u.setScalar(l):u instanceof Gn&&l instanceof Gn?u.mask=l.mask:u.set(l),!Xe&&!n?.linear&&m&&u.convertSRGBToLinear()}}else if(h[c]=l,h[c]instanceof qn&&h[c].format===Jt&&h[c].type===yn){let d=h[c];n?.gl&&(Ke.colorSpaceExist(d)&&Ke.colorSpaceExist(n.gl)?d.colorSpace=n.gl.outputColorSpace:d.encoding=n.gl.outputEncoding)}Lu(h[c]),Lu(u),io(i)}let s=t?.eventCount,o=t?.instanceStore?.get("parent");if(o&&n.internal&&i.raycast&&s!==t?.eventCount){let a=n.internal.interaction.indexOf(i);a>-1&&n.internal.interaction.splice(a,1),t?.eventCount&&n.internal.interaction.push(i)}return o&&t?.onUpdate&&r.length&&t.onUpdate(i),i[ec]&&delete i[ec],i}var Em={};function co(i){Object.assign(Em,i)}var[qb]=Qs(()=>Em);function $n(i,e,t){let n=[i,null,[],!1,void 0,void 0,void 0,void 0],r=Object.assign(e,{__ngt_renderer__:n});return r.ownerDocument||(r.ownerDocument=t),n[0]!=="three"&&(n[7]=()=>(n[6]||(n[6]=new Ac(r)),n[6])),r}function $b(i){return!i.__ngt_renderer__||i instanceof Element||i instanceof Document||i instanceof Window}function Qa(i){let e=i.__ngt_renderer__[1];if(e&&e.__ngt_renderer__[0]==="portal"&&e.__ngt_renderer__[5]?.__ngt_renderer__[0]==="three")return e.__ngt_renderer__[5];for(;e&&e.__ngt_renderer__[0]!=="three";)e=e.__ngt_renderer__[5]?e.__ngt_renderer__[5]:e.__ngt_renderer__[1];return e}function Iu(i,e){i.__ngt_renderer__[1]||(i.__ngt_renderer__[1]=e)}function pm(i,e){i.__ngt_renderer__[2].includes(e)||i.__ngt_renderer__[2].push(e)}function Yb(i,e){let t=i.__ngt_renderer__?.[2].findIndex(n=>e===n);t>=0&&i.__ngt_renderer__[2].splice(t,1)}function nc(i,e,t=[],n=!1){let[r,...s]=t;r&&(s.length===0?n?Mn(i,{[r]:e}):i[r]=e:(Kb(i,r,n),nc(i[r],e,s,n)))}function Zb(i,e,t){let n=Ye(e);n&&(Array.isArray(t)?nc(i,n.previousAttach,t,n.isRaw):n.previousAttach())}function Kb(i,e,t=!1){if((!Object.hasOwn(i,e)&&Reflect&&Reflect.has&&!Reflect.has(i,e)||i[e]===void 0)&&(i[e]={}),t){if(Ye(i[e]))return;let r=Ye(i);if(!r)return;Object.assign(i[e],{[ec]:r.store})}}function Jb(i){if(!i)return i;let e="",t=!0;for(let n=0;n<i.length;n++){let r=i[n];if(r==="-"){t=!0;continue}e+=t?r.toUpperCase():r,t=!1}return e}function Du(i,e){let t=Ye(i),n=Ye(e);if(!t||!n)throw new Error("[NGT] THREE instances need to be prepared with local state.");let r=!1;if(!n.store||n.store!==t.store||n.store===t.store.get("previousRoot")){n.store=t.store;let s=[...n.objects?Tt(n.objects):[],...n.nonObjects?Tt(n.nonObjects):[]];for(let o of s){let a=Ye(o);a&&(a.store=n.store)}}if(n.attach){let s=n.attach;if(typeof s=="function"){let o;if(n.isRaw){if(n.instanceStore.get("parent")!==i&&n.setParent(i),e.__ngt_renderer__[4]===void 0)return;o=s(i,e.__ngt_renderer__[4],n.store)}else o=s(i,e,n.store);o&&(n.previousAttach=o)}else{if(s[0]==="none"){io(e);return}if(s[0]==="material"&&s[1]&&typeof Number(s[1])=="number"&&Ke.material(e)&&!Array.isArray(i.material)&&(i.material=[]),n.isRaw){if(n.instanceStore.get("parent")!==i&&n.setParent(i),e.__ngt_renderer__[4]===void 0)return;nc(i,e.__ngt_renderer__[4],s,!0)}else nc(i,e,s);n.previousAttach=s.reduce((o,a)=>o[a],i)}}else Ke.object3D(i)&&Ke.object3D(e)&&(i.add(e),r=!0);t.add&&t.add(e,r?"objects":"nonObjects"),n.parent&&Tt(n.parent)!==i&&n.setParent(i),n.onAttach&&n.onAttach({parent:i,node:e}),io(e),io(i)}function no(i,e,t){let n=Ye(e),r=Ye(i);if(r?.setParent(null),n?.remove(i,"objects"),n?.remove(i,"nonObjects"),e){if(r?.attach)Zb(e,i,r.attach);else if(Ke.object3D(e)&&Ke.object3D(i)){e.remove(i);let o=r?.store||n?.store;o&&Ub(o,i)}}let s=r?.primitive;s||(mm(r?.instanceStore.get("objects")||[],i,!!t),mm(i.children,i,!!t)),!s&&i.dispose&&!Ke.scene(i)&&queueMicrotask(()=>i.dispose()),e&&io(e)}function mm(i,e,t){i&&[...i].forEach(n=>no(n,e,t))}function Qb(i,e,t,n){let r=Ye(i);if(!r)return console.warn("[NGT] instance has not been prepared yet."),()=>{};if(t===Ru.BEFORE_RENDER)return r.store.get("internal").subscribe(a=>n({state:a,object:i}),e||r.priority||0);if(t===Ru.ATTACHED)return r.onAttach=n,Tt(r.parent)&&r.onAttach({parent:Tt(r.parent),node:i}),()=>{r.onAttach=void 0};if(t===Ru.UPDATED)return r.onUpdate=n,()=>{r.onUpdate=void 0};if(kb.includes(t)&&i instanceof cn)return t==="disposed"&&(t="dispose"),i.parent&&(t==="added"||t==="removed")&&n({type:t,target:i}),i.addEventListener(t,n),()=>i.removeEventListener(t,n);r.handlers||(r.handlers={});let s=r.handlers[t],o=a=>{s&&s(a),n(a)};if(Object.assign(r.handlers,{[t]:o}),r.eventCount+=1,r.eventCount===1&&i.raycast){let a=r.store;for(;a.get("previousRoot");)a=a.get("previousRoot");(a.get("internal","interaction")||[]).push(i)}return()=>{let a=Ye(i);if(a){a.eventCount-=1;let c=a.store.get("internal","interaction")||[],l=c.findIndex(h=>h.uuid===i.uuid);l>=0&&c.splice(l,1)}}}var gm=(()=>{let e=class e{constructor(){this.delegateRendererFactory=le(Si,{skipSelf:!0}),this.document=le(At),this.catalogue=qb(),this.rootStore=ao(),this.portalCommentsNodes=[],this.rendererMap=new Map,this.routedSet=new Set}createRenderer(n,r){let s=this.delegateRendererFactory.createRenderer(n,r);if(!r)return s;if(r.type[Bb])return this.rendererMap.set(r.id,s),s;r.type[Sm]&&this.routedSet.add(r.id);let o=r.type[zb],a=this.rendererMap.get(r.id);return a||this.rendererMap.set(r.id,a=new Ou(s,this.rootStore,this.document,this.portalCommentsNodes,this.catalogue,!n&&!o&&(this.routedSet.size===0||this.routedSet.has(r.id)))),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),Ou=class{constructor(e,t,n,r,s,o=!0){this.delegate=e,this.rootStore=t,this.document=n,this.portalCommentsNodes=r,this.catalogue=s,this.isRoot=o,this.argsCommentNodes=[],this.createText=this.delegate.createText.bind(this.delegate),this.destroy=this.delegate.destroy.bind(this.delegate),this.destroyNode=null,this.selectRootElement=this.delegate.selectRootElement.bind(this.delegate),this.nextSibling=this.delegate.nextSibling.bind(this.delegate),this.addClass=this.delegate.addClass.bind(this.delegate),this.removeClass=this.delegate.removeClass.bind(this.delegate),this.setStyle=this.delegate.setStyle.bind(this.delegate),this.removeStyle=this.delegate.removeStyle.bind(this.delegate),this.setValue=this.delegate.setValue.bind(this.delegate)}createElement(e,t){let n=this.delegate.createElement(e,t);if(t)return $n("dom",n,this.document);if(this.isRoot){this.isRoot=!1;let a=$n("three",this.rootStore.snapshot.scene,this.document);return a.__ngt_renderer__[7]=()=>(a.__ngt_renderer__[6]||(a.__ngt_renderer__[6]=new Ac(n)),a.__ngt_renderer__[6]),a}if(e===Au.NGT_PORTAL)return $n("portal",n,this.document);if(e===Au.NGT_VALUE)return $n("three",ro({__ngt_renderer__:{rawValue:void 0}},{store:this.rootStore,isRaw:!0}),this.document);let[r]=[this.getNgtArgs()?.value||[]];if(e===Au.NGT_PRIMITIVE){if(!r[0])throw new Error("[NGT] ngt-primitive without args is invalid");let a=r[0];return Ye(a)||ro(a,{store:this.rootStore,primitive:!0}),$n("three",a,this.document)}let s=Jb(e.startsWith("ngt-")?e.slice(4):e),o=this.catalogue[s];if(o){let a=ro(new o(...r),{store:this.rootStore}),c=$n("three",a,this.document),l=Ye(a);return Ke.geometry(a)?l.attach=["geometry"]:Ke.material(a)&&(l.attach=["material"]),c}return $n("dom",n,this.document)}createComment(e){let t=this.delegate.createComment(e);return t[so]=n=>{n==="args"?this.argsCommentNodes.push(t):typeof n=="object"&&this.portalCommentsNodes.push(n)},$n("comment",t,this.document)}appendChild(e,t){let n=e.__ngt_renderer__,r=t.__ngt_renderer__;if(n[0]==="dom"&&(t instanceof Text||r[0]==="dom")){if(pm(e,t),t[Tu]&&t[Tu]instanceof HTMLElement){this.delegate.appendChild(t[Tu],t);return}if(this.delegate.appendChild(e,t),r&&(Iu(t,e),this.shouldFindGrandparentInstance(n,r,t))){let s=Qa(e);s&&this.appendChild(s,t)}return}if(r?.[0]==="comment"){Iu(t,e);return}if(Iu(t,e),pm(e,t),r?.[0]==="portal"){r[5]||this.processPortalContainer(t),r[5]&&this.appendChild(e,r[5]);return}if(n[0]==="portal"){n[5]||this.processPortalContainer(e),n[5]&&this.appendChild(n[5],t);return}if(n[0]==="three"&&r?.[0]==="three"){if(Ye(t)?.instanceStore?.get("parent")||e===t)return;Du(e,t);return}if(n[0]==="three")for(let s of r?.[2]||[])this.appendChild(e,s);if(this.shouldFindGrandparentInstance(n,r,t)){let s=Qa(e);s&&this.appendChild(s,t);return}}insertBefore(e,t){e==null||!e.__ngt_renderer__||e===t||this.appendChild(e,t)}removeChild(e,t,n){e==null&&(e=Tt(()=>Ye(t)?.parent?.())||t.__ngt_renderer__?.[1]);let r=t.__ngt_renderer__;if(e==null){r&&(r[0]==="three"&&no(t,void 0,!0),this.destroyInternal(t,void 0));return}let s=e.__ngt_renderer__;if((!r||!s)&&e instanceof Element&&(t instanceof Element||t instanceof Text||t instanceof Comment)){this.delegate.removeChild(e,t),this.destroyInternal(t,e);return}if(r[0]==="dom"&&(!s||s[0]==="dom")){this.delegate.removeChild(e,t),this.destroyInternal(t,e);return}if(s[0]==="three"&&r[0]==="three"){no(t,e,!0),this.destroyInternal(t,e);return}if(s[0]==="portal"&&s[5]?.__ngt_renderer__[0]==="three"){this.removeChild(s[5],t,n);return}if(s[0]==="three"){this.destroyInternal(t,e);return}let o=Qa(e);o&&this.removeChild(o,t,n),this.destroyInternal(t,o)}parentNode(e){let t=e.__ngt_renderer__;return t?.[1]?t[1]:this.delegate.parentNode(e)}setAttributeInternal(e,t,n,r){let s=e.__ngt_renderer__;if(s[3])return!1;if(s[0]==="three"){if(t===$r.RENDER_PRIORITY){let o=Number(n);isNaN(o)&&(o=0,console.warn('[NGT] "priority" is an invalid number, default to 0'));let a=Ye(e);a&&(a.priority=o)}else if(t===$r.ATTACH){let o=n.split(".");if(o.length){let a=Ye(e);a&&(a.attach=o)}}else{let o=n;o===""||o==="true"||o==="false"?o=o==="true"||o==="":isNaN(Number(o))||(o=Number(o)),t===$r.RAW_VALUE?s[4]=o:Mn(e,{[t]:o})}return!1}return!0}setAttribute(e,t,n,r){this.setAttributeInternal(e,t,n,r)&&this.delegate.setAttribute(e,t,n)}removeAttribute(e,t,n){this.setAttributeInternal(e,t,void 0,n)&&this.delegate.removeAttribute(e,t,n)}setProperty(e,t,n){let r=e.__ngt_renderer__;if(!r||r[3])return;let s=Ye(e);if(r[0]==="three"){if(t===$r.PARAMETERS){"raycast"in n&&n.raycast===null&&(n.raycast=()=>null),Mn(e,n),"geometry"in n&&n.geometry.isBufferGeometry&&s?.updateGeometryStamp();return}let o=s?.instanceStore.get("parent")||r[1];if(s?.isRaw&&t===$r.RAW_VALUE){r[4]=n,o&&Du(o,e);return}if(t===$r.ATTACH){s&&(s.attach=Array.isArray(n)?n.map(a=>a.toString()):typeof n=="function"?n:typeof n=="string"?n.split("."):[n]),o&&Du(o,e);return}t==="raycast"&&n===null&&(n=()=>null),Mn(e,{[t]:n}),t==="geometry"&&n.isBufferGeometry&&s?.updateGeometryStamp();return}return this.delegate.setProperty(e,t,n)}listen(e,t,n){let r=e.__ngt_renderer__;if(!r||$b(e))return this.delegate.listen(e,t,n);if(r[0]==="three"){let s=e,a=Ye(s)?.priority??0;return Qb(s,a,t,n)}if(e===this.rootStore.snapshot.scene){let[s,o]=t.split(":");o==null&&(o=s,s="");let a=s==="window"?e.ownerDocument.defaultView:e.ownerDocument;return this.delegate.listen(a,o,n)}return()=>{}}destroyInternal(e,t){let n=e.__ngt_renderer__;if(!(!n||n[3])){if(n[0]==="three"){let r=Ye(e);r?.instanceStore&&(r.instanceStore.get("objects").forEach(s=>this.destroyInternal(s,t)),r.instanceStore.get("nonObjects").forEach(s=>this.destroyInternal(s,t))),r?.onUpdate&&delete r.onUpdate,r?.onAttach&&delete r.onAttach,delete r.objects,delete r.nonObjects,delete r.parent,delete r.add,delete r.remove,delete r.store,delete r.handlers,r?.primitive||delete e.__ngt__}n[0]==="comment"&&(n[6]=null,n[7]=null,delete e[so],this.removeCommentNode(e,this.argsCommentNodes)),n[0]==="portal"&&(n[6]=null,n[7]=null,this.removeCommentNode(e,this.portalCommentsNodes)),n[1]=null;for(let r of n[2]||[]){if(r.__ngt_renderer__?.[0]==="three"&&t){if(t.__ngt_renderer__?.[0]==="three"){no(r,t,!0);continue}let s=Qa(t);s&&no(r,s,!0)}this.destroyInternal(r,t)}n[2]=[],n[3]=!0,t&&Yb(t,e)}}removeCommentNode(e,t){let n=t.findIndex(r=>r===e);n>-1&&t.splice(n,1)}processPortalContainer(e){let t=e.__ngt_renderer__[7]?.()?.injector;if(!t)return;let n=t.get(tc,null);if(!n)return;let r=n.get("scene");if(!r)return;let s=Ye(r);s&&(s.store=n),e.__ngt_renderer__[5]=$n("three",r,this.document)}shouldFindGrandparentInstance(e,t,n){let r=e[0],s=t[0],o=Ye(n),a=s==="three"&&!o?.instanceStore?.get("parent"),c=r==="dom";return a||c&&s==="dom"||c}getNgtArgs(){let e,t=[],n=this.argsCommentNodes.length-1;for(;n>=0;){let r=this.argsCommentNodes[n];if(r.__ngt_renderer__[3]){t.push(n),n--;continue}let s=r.__ngt_renderer__[7]?.()?.injector;if(!s){n--;continue}let o=s.get(Fu,null);if(o&&o.validate()){e=o;break}n--}return t.forEach(r=>{this.argsCommentNodes.splice(r,1)}),e}get data(){return this.delegate.data}};function ew(i){let e=[gm,{provide:Si,useExisting:gm},wm(()=>i)];return Cn(e)}var Yr={objects:"shallow",strict:!1};function Tm(i){return Js(Tm,i,()=>{let e=ao(),t=bm();return n=>{let r=Zr.has(n),s=Zr.get(n);if(s&&console.warn("[NGT] Same canvas root is being created twice"),s||=e,!s)throw new Error("[NGT] No store initialized");r||Zr.set(n,s);let o=!1,a;return{isConfigured:o,destroy:(c=500)=>{let l=Zr.get(n);l&&(l.update(h=>({internal:ct(re({},h.internal),{active:!1})})),setTimeout(()=>{try{let h=l.get();h.events.disconnect?.(),h.gl?.renderLists?.dispose?.(),h.gl?.forceContextLoss?.(),h.gl?.xr&&h.xr.disconnect(),nw(h),Zr.delete(n)}catch(h){console.error("[NGT] Unexpected error while destroying Canvas Root",h)}},c))},configure:c=>{let{shadows:l=!1,linear:h=!1,flat:u=!1,legacy:d=!1,orthographic:m=!1,frameloop:v="always",dpr:x=[1,2],gl:f,size:p,camera:b,raycaster:_,scene:E,events:L,lookAt:R,performance:T}=c,I=s.snapshot,X={},g=I.gl;I.gl||(X.gl=g=Db(f,n));let S=I.raycaster;S||(X.raycaster=S=new $a);let J=_||{},{params:G}=J,V=mi(J,["params"]);if(Ke.equ(V,S,Yr)||Mn(S,V),Ke.equ(G,S.params,Yr)||Mn(S,{params:re(re({},S.params),G||{})}),!I.camera||I.camera===a&&!Ke.equ(a,b,Yr)){a=b;let z=Ke.camera(b),W=z?b:Lb(m,I.size);z||(W.position.z=5,b&&(Mn(W,b),("aspect"in b||"left"in b||"right"in b||"top"in b||"bottom"in b)&&(Object.assign(W,{manual:!0}),W?.updateProjectionMatrix())),!I.camera&&!b?.rotation&&!b?.quaternion&&(Array.isArray(R)?W.lookAt(R[0],R[1],R[2]):R instanceof N?W.lookAt(R):W.lookAt(0,0,0)),W.updateProjectionMatrix?.()),Ke.instance(W)||(W=ro(W,{store:s})),X.camera=W,S.camera=W}if(!I.scene){let z;E instanceof qs?z=E:(z=new qs,E&&Mn(z,E)),Mn(z,{setAttribute:(W,H)=>{n instanceof HTMLCanvasElement&&(n.parentElement?n.parentElement.setAttribute(W,H):n.setAttribute(W,H))}}),X.scene=ro(z,{store:s})}if(!I.xr){let z=(oe,he)=>{s.snapshot.frameloop!=="never"&&t.advance(oe,!0,s,he)},W=()=>{let oe=s.snapshot;oe.gl.xr.enabled=oe.gl.xr.isPresenting,oe.gl.xr.setAnimationLoop(oe.gl.xr.isPresenting?z:null),oe.gl.xr.isPresenting||t.invalidate(s)},H={connect:()=>{g.xr.addEventListener("sessionstart",W),g.xr.addEventListener("sessionend",W)},disconnect:()=>{g.xr.removeEventListener("sessionstart",W),g.xr.removeEventListener("sessionend",W)}};g.xr&&typeof g.xr.addEventListener=="function"&&H.connect(),X.xr=H}if(g.shadowMap){let z=g.shadowMap.enabled,W=g.shadowMap.type;if(g.shadowMap.enabled=!!l,typeof l=="boolean")g.shadowMap.type=Zs;else if(typeof l=="string"){let H={basic:Ip,percentage:Ya,soft:Zs,variance:mn};g.shadowMap.type=H[l]??Zs}else Ke.obj(l)&&Object.assign(g.shadowMap,l);(z!==g.shadowMap.enabled||W!==g.shadowMap.type)&&xm(g.shadowMap)}if(Xe){let z=Xe;"enabled"in z?z.enabled=!d:"legacyMode"in z&&(z.legacyMode=d)}o||Mn(g,{outputEncoding:h?3e3:3001,toneMapping:u?En:fu}),I.legacy!==d&&(X.legacy=d),I.linear!==h&&(X.linear=h),I.flat!==u&&(X.flat=u),g.setClearAlpha&&g.setClearAlpha(0),g.setPixelRatio(Uu(I.viewport.dpr)),g.setSize(I.size.width,I.size.height),Ke.obj(f)&&typeof f!="function"&&!Ke.renderer(f)&&!Ke.equ(f,g,Yr)&&Mn(g,f),L&&!I.events.handlers&&(X.events=L(s)),T&&!Ke.equ(T,I.performance,Yr)&&(X.performance=re(re({},I.performance),T)),Object.keys(X).length&&s.update(X);let j=tw(n,p);Ke.equ(j,I.size,Yr)||I.setSize(j.width,j.height,j.top,j.left),x&&I.viewport.dpr!==Uu(x)&&I.setDpr(x),I.frameloop!==v&&I.setFrameloop(v),o=!0}}}})}function tw(i,e){return e||(typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement&&i.parentElement?i.parentElement.getBoundingClientRect():typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?{width:i.width,height:i.height,top:0,left:0}:{width:0,height:0,top:0,left:0})}function nw(i){i.dispose&&i.type!=="Scene"&&i.dispose();for(let e in i)e.dispose?.(),delete i[e]}var vm,iw=(()=>{let e=class e{constructor(n,r){n.events.pipe(Rn(s=>s instanceof ws),qr()).subscribe(r.detectChanges.bind(r))}};vm=Sm,e[vm]=!0,e.\u0275fac=function(r){return new(r||e)(yo(Zo),yo(as))},e.\u0275cmp=Wt({type:e,selectors:[["ngt-routed-scene"]],standalone:!0,features:[qt],decls:1,vars:0,template:function(r,s){r&1&&Ot(0,"router-outlet")},dependencies:[Ds],encapsulation:2});let i=e;return i})(),Am=(()=>{let e=class e{constructor(){this.store=ao(),this.initRoot=Tm(),this.host=le(_i),this.zone=le(Xt),this.environmentInjector=le(tr),this.injector=le(yi),this.sceneGraph=vt.required({transform:n=>n==="routed"?iw:n}),this.gl=vt(),this.size=vt(),this.shadows=vt(!1,{transform:n=>n===""?bi(n):n}),this.legacy=vt(!1,{transform:bi}),this.linear=vt(!1,{transform:bi}),this.flat=vt(!1,{transform:bi}),this.orthographic=vt(!1,{transform:bi}),this.frameloop=vt("always"),this.performance=vt(),this.dpr=vt([1,2]),this.raycaster=vt(),this.scene=vt(),this.camera=vt(),this.events=vt(Fb),this.eventSource=vt(),this.eventPrefix=vt("offset"),this.lookAt=vt(),this.created=sd(),this.pointerMissed=em(this.store.get("pointerMissed$")),this.glCanvas=is.required("glCanvas"),this.glCanvasViewContainerRef=is.required("glCanvas",{read:nr}),this.hbPointerEvents=Qn(()=>this.eventSource()?"none":"auto"),this.resizeResult=In({},{equal:Object.is}),wc(()=>{this.zone.runOutsideAngular(()=>{this.configurator=this.initRoot(this.glCanvas().nativeElement),ir(()=>{this.noZoneResizeEffect()},{injector:this.injector})})}),le(Jn).onDestroy(()=>{this.glRef?.destroy(),this.glEnvironmentInjector?.destroy(),this.configurator?.destroy()})}noZoneResizeEffect(){let n=this.resizeResult();n.width>0&&n.height>0&&(this.configurator||(this.configurator=this.initRoot(this.glCanvas().nativeElement)),this.configurator.configure({gl:this.gl(),shadows:this.shadows(),legacy:this.legacy(),linear:this.linear(),flat:this.flat(),orthographic:this.orthographic(),frameloop:this.frameloop(),performance:this.performance(),dpr:this.dpr(),raycaster:this.raycaster(),scene:this.scene(),camera:this.camera(),events:this.events(),eventSource:this.eventSource(),eventPrefix:this.eventPrefix(),lookAt:this.lookAt(),size:n}),Tt(()=>{this.glRef?this.glRef.changeDetectorRef.detectChanges():this.noZoneRender()}))}noZoneRender(){this.glEnvironmentInjector?.destroy(),this.glRef?.destroy(),this.store.update(o=>({internal:ct(re({},o.internal),{active:!0})}));let[n,r,s]=[this.store.snapshot,Tt(this.eventSource),Tt(this.eventPrefix)];n.events.connect?.(r?Ke.ref(r)?r.nativeElement:r:this.host.nativeElement),s&&n.setEvents({compute:(o,a)=>{let{pointer:c,raycaster:l,camera:h,size:u}=a.snapshot,d=o[s+"X"],m=o[s+"Y"];c.set(d/u.width*2-1,-(m/u.height)*2+1),l.setFromCamera(c,h)}}),this.created.emit(this.store.snapshot),this.store.get("events","connected")||this.store.get("events").connect?.(Tt(this.glCanvas).nativeElement),this.glEnvironmentInjector=xo([ew(this.store)],this.environmentInjector),this.glRef=Tt(this.glCanvasViewContainerRef).createComponent(Tt(this.sceneGraph),{environmentInjector:this.glEnvironmentInjector,injector:this.injector}),this.glRef.changeDetectorRef.detectChanges()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["ngt-canvas"]],viewQuery:function(r,s){r&1&&(ss(s.glCanvas,am,5),ss(s.glCanvasViewContainerRef,am,5,nr)),r&2&&wo(2)},hostAttrs:[2,"display","block","position","relative","width","100%","height","100%","overflow","hidden"],hostVars:2,hostBindings:function(r,s){r&2&&dd("pointer-events",s.hbPointerEvents())},inputs:{sceneGraph:[1,"sceneGraph"],gl:[1,"gl"],size:[1,"size"],shadows:[1,"shadows"],legacy:[1,"legacy"],linear:[1,"linear"],flat:[1,"flat"],orthographic:[1,"orthographic"],frameloop:[1,"frameloop"],performance:[1,"performance"],dpr:[1,"dpr"],raycaster:[1,"raycaster"],scene:[1,"scene"],camera:[1,"camera"],events:[1,"events"],eventSource:[1,"eventSource"],eventPrefix:[1,"eventPrefix"],lookAt:[1,"lookAt"]},outputs:{created:"created",pointerMissed:"pointerMissed"},standalone:!0,features:[fd([rm({emitInZone:!1,emitInitialResult:!0,debounce:{scroll:50,resize:0}}),wm()]),qt],decls:3,vars:0,consts:[["glCanvas",""],[2,"height","100%","width","100%",3,"ngxResize"],[2,"display","block"]],template:function(r,s){if(r&1){let o=bo();Mo(0,"div",1),rs("ngxResize",function(c){return gi(o),vi(s.resizeResult.set(c))}),Ot(1,"canvas",2,0),So()}},dependencies:[sm],encapsulation:2,changeDetection:0});let i=e;return i})();var LT=new ft("NGT_HTML_DOM_ELEMENT");var oo=new Map,ym=new WeakMap;function rw(i){let e=[];return Array.isArray(i)?e=i:typeof i=="string"?e=[i]:e=Object.values(i),e.map(t=>t.includes("undefined")||t.includes("null")||!t?"":t)}function Rm(i,e,{extensions:t,onLoad:n,onProgress:r}={}){return()=>{let s=rw(e()),o=ym.get(i(s));return o||(o=new(i(s)),ym.set(i(s),o)),t&&t(o),s.map(a=>a===""?Promise.resolve(null):(oo.has(a)||oo.set(a,new Promise((c,l)=>{o.load(a,h=>{"scene"in h&&Object.assign(h,Nb(h.scene)),n&&n(h),c(h)},r,h=>l(new Error(`[NGT] Could not load ${a}: ${h?.message}`)))})),oo.get(a)))}}function ic(i,e,{extensions:t,onProgress:n,onLoad:r,injector:s}={}){return Js(ic,s,()=>{let o=In(null),a=Rm(i,e,{extensions:t,onProgress:n,onLoad:r});return ir(()=>{let c=e(),l=a();Promise.all(l).then(h=>{o.update(()=>{if(Array.isArray(c))return h;if(typeof c=="string")return h[0];let u=Object.keys(c);return u.reduce((d,m)=>(d[m]=h[u.indexOf(m)],d),{})})})}),o.asReadonly()})}ic.preload=(i,e,t,n)=>{let r=Rm(i,e,{extensions:t,onLoad:n})();r&&Promise.all(r)};ic.destroy=()=>{oo.clear()};ic.clear=i=>{(Array.isArray(i)?i:[i]).forEach(t=>{oo.delete(t)})};function Bu(i){return(e,t,n)=>{if(typeof t>"u"||typeof t=="boolean"){n=!!t;let o=e;return Qn(()=>{let a=o();if(!(n&&a==null))return typeof a=="number"?new i().setScalar(a):a?new i(...a):new i},{equal:(a,c)=>!!a&&!!c&&a.equals(c)})}let r=e,s=t;return Qn(()=>{let o=r()[s];if(!(n&&o==null))return typeof o=="number"?new i().setScalar(o):o?new i(...o):new i},{equal:(o,a)=>!!o&&!!a&&o.equals(a)})}}var NT=Bu(De),UT=Bu(N),OT=Bu(it);var sw=["mesh"];co({Mesh:zt,MeshStandardMaterial:Gr,BoxGeometry:Xn});var Cm=(()=>{let e=class e{constructor(){this.position=vt([0,0,0]),this.hovered=In(!1),this.clicked=In(!1),this.meshRef=is.required("mesh")}onBeforeRender(n){n.rotation.x+=.01,n.rotation.y+=.01}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["app-cube"]],viewQuery:function(r,s){r&1&&ss(s.meshRef,sw,5),r&2&&wo()},inputs:{position:[1,"position"]},standalone:!0,features:[qt],decls:4,vars:3,consts:[["mesh",""],[3,"click","pointerover","pointerout","beforeRender","position","scale"],[3,"color"]],template:function(r,s){if(r&1){let o=bo();Mo(0,"ngt-mesh",1,0),rs("click",function(){return gi(o),vi(s.clicked.set(!s.clicked()))})("pointerover",function(){return gi(o),vi(s.hovered.set(!0))})("pointerout",function(){return gi(o),vi(s.hovered.set(!1))})("beforeRender",function(c){return gi(o),vi(s.onBeforeRender(c.object))}),Ot(2,"ngt-box-geometry")(3,"ngt-mesh-standard-material",2),So()}r&2&&(jt("position",s.position())("scale",s.clicked()?1.5:1),Pn(3),jt("color",s.hovered()?"darkred":"orange"))}});let i=e;return i})();var ow=Object.defineProperty,aw=(i,e,t)=>e in i?ow(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,we=(i,e,t)=>(aw(i,typeof e!="symbol"?e+"":e,t),t),rc=new Vr,Pm=new gn,cw=Math.cos(70*(Math.PI/180)),Im=(i,e)=>(i%e+e)%e,lo=class extends cn{constructor(e,t){super(),we(this,"object"),we(this,"domElement"),we(this,"enabled",!0),we(this,"target",new N),we(this,"minDistance",0),we(this,"maxDistance",1/0),we(this,"minZoom",0),we(this,"maxZoom",1/0),we(this,"minPolarAngle",0),we(this,"maxPolarAngle",Math.PI),we(this,"minAzimuthAngle",-1/0),we(this,"maxAzimuthAngle",1/0),we(this,"enableDamping",!1),we(this,"dampingFactor",.05),we(this,"enableZoom",!0),we(this,"zoomSpeed",1),we(this,"enableRotate",!0),we(this,"rotateSpeed",1),we(this,"enablePan",!0),we(this,"panSpeed",1),we(this,"screenSpacePanning",!0),we(this,"keyPanSpeed",7),we(this,"zoomToCursor",!1),we(this,"autoRotate",!1),we(this,"autoRotateSpeed",2),we(this,"reverseOrbit",!1),we(this,"reverseHorizontalOrbit",!1),we(this,"reverseVerticalOrbit",!1),we(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),we(this,"mouseButtons",{LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN}),we(this,"touches",{ONE:$i.ROTATE,TWO:$i.DOLLY_PAN}),we(this,"target0"),we(this,"position0"),we(this,"zoom0"),we(this,"_domElementKeyEvents",null),we(this,"getPolarAngle"),we(this,"getAzimuthalAngle"),we(this,"setPolarAngle"),we(this,"setAzimuthalAngle"),we(this,"getDistance"),we(this,"getZoomScale"),we(this,"listenToKeyEvents"),we(this,"stopListenToKeyEvents"),we(this,"saveState"),we(this,"reset"),we(this,"update"),we(this,"connect"),we(this,"dispose"),we(this,"dollyIn"),we(this,"dollyOut"),we(this,"getScale"),we(this,"setScale"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>h.phi,this.getAzimuthalAngle=()=>h.theta,this.setPolarAngle=C=>{let K=Im(C,2*Math.PI),A=h.phi;A<0&&(A+=2*Math.PI),K<0&&(K+=2*Math.PI);let ee=Math.abs(K-A);2*Math.PI-ee<ee&&(K<A?K+=2*Math.PI:A+=2*Math.PI),u.phi=K-A,n.update()},this.setAzimuthalAngle=C=>{let K=Im(C,2*Math.PI),A=h.theta;A<0&&(A+=2*Math.PI),K<0&&(K+=2*Math.PI);let ee=Math.abs(K-A);2*Math.PI-ee<ee&&(K<A?K+=2*Math.PI:A+=2*Math.PI),u.theta=K-A,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=C=>{C.addEventListener("keydown",de),this._domElementKeyEvents=C},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),c=a.NONE},this.update=(()=>{let C=new N,K=new N(0,1,0),A=new _n().setFromUnitVectors(e.up,K),ee=A.clone().invert(),F=new N,Y=new _n,se=2*Math.PI;return function(){let He=n.object.position;A.setFromUnitVectors(e.up,K),ee.copy(A).invert(),C.copy(He).sub(n.target),C.applyQuaternion(A),h.setFromVector3(C),n.autoRotate&&c===a.NONE&&j(G()),n.enableDamping?(h.theta+=u.theta*n.dampingFactor,h.phi+=u.phi*n.dampingFactor):(h.theta+=u.theta,h.phi+=u.phi);let Qe=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(Qe)&&isFinite(ut)&&(Qe<-Math.PI?Qe+=se:Qe>Math.PI&&(Qe-=se),ut<-Math.PI?ut+=se:ut>Math.PI&&(ut-=se),Qe<=ut?h.theta=Math.max(Qe,Math.min(ut,h.theta)):h.theta=h.theta>(Qe+ut)/2?Math.max(Qe,h.theta):Math.min(ut,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),n.zoomToCursor&&X||n.object.isOrthographicCamera?h.radius=Ze(h.radius):h.radius=Ze(h.radius*d),C.setFromSpherical(h),C.applyQuaternion(ee),He.copy(n.target).add(C),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),m.set(0,0,0));let ze=!1;if(n.zoomToCursor&&X){let Mt=null;if(n.object instanceof xt&&n.object.isPerspectiveCamera){let Ut=C.length();Mt=Ze(Ut*d);let fi=Ut-Mt;n.object.position.addScaledVector(T,fi),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Ut=new N(I.x,I.y,0);Ut.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix(),ze=!0;let fi=new N(I.x,I.y,0);fi.unproject(n.object),n.object.position.sub(fi).add(Ut),n.object.updateMatrixWorld(),Mt=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Mt!==null&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Mt).add(n.object.position):(rc.origin.copy(n.object.position),rc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(rc.direction))<cw?e.lookAt(n.target):(Pm.setFromNormalAndCoplanarPoint(n.object.up,n.target),rc.intersectPlane(Pm,n.target))))}else n.object instanceof jn&&n.object.isOrthographicCamera&&(ze=d!==1,ze&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/d)),n.object.updateProjectionMatrix()));return d=1,X=!1,ze||F.distanceToSquared(n.object.position)>l||8*(1-Y.dot(n.object.quaternion))>l?(n.dispatchEvent(r),F.copy(n.object.position),Y.copy(n.object.quaternion),ze=!1,!0):!1}})(),this.connect=C=>{n.domElement=C,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",O),n.domElement.addEventListener("pointercancel",Q),n.domElement.addEventListener("wheel",ae)},this.dispose=()=>{var C,K,A,ee,F,Y;n.domElement&&(n.domElement.style.touchAction="auto"),(C=n.domElement)==null||C.removeEventListener("contextmenu",me),(K=n.domElement)==null||K.removeEventListener("pointerdown",O),(A=n.domElement)==null||A.removeEventListener("pointercancel",Q),(ee=n.domElement)==null||ee.removeEventListener("wheel",ae),(F=n.domElement)==null||F.ownerDocument.removeEventListener("pointermove",$),(Y=n.domElement)==null||Y.ownerDocument.removeEventListener("pointerup",Q),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",de)};let n=this,r={type:"change"},s={type:"start"},o={type:"end"},a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},c=a.NONE,l=1e-6,h=new Ys,u=new Ys,d=1,m=new N,v=new De,x=new De,f=new De,p=new De,b=new De,_=new De,E=new De,L=new De,R=new De,T=new N,I=new De,X=!1,g=[],S={};function G(){return 2*Math.PI/60/60*n.autoRotateSpeed}function V(){return Math.pow(.95,n.zoomSpeed)}function j(C){n.reverseOrbit||n.reverseHorizontalOrbit?u.theta+=C:u.theta-=C}function J(C){n.reverseOrbit||n.reverseVerticalOrbit?u.phi+=C:u.phi-=C}let z=(()=>{let C=new N;return function(A,ee){C.setFromMatrixColumn(ee,0),C.multiplyScalar(-A),m.add(C)}})(),W=(()=>{let C=new N;return function(A,ee){n.screenSpacePanning===!0?C.setFromMatrixColumn(ee,1):(C.setFromMatrixColumn(ee,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(A),m.add(C)}})(),H=(()=>{let C=new N;return function(A,ee){let F=n.domElement;if(F&&n.object instanceof xt&&n.object.isPerspectiveCamera){let Y=n.object.position;C.copy(Y).sub(n.target);let se=C.length();se*=Math.tan(n.object.fov/2*Math.PI/180),z(2*A*se/F.clientHeight,n.object.matrix),W(2*ee*se/F.clientHeight,n.object.matrix)}else F&&n.object instanceof jn&&n.object.isOrthographicCamera?(z(A*(n.object.right-n.object.left)/n.object.zoom/F.clientWidth,n.object.matrix),W(ee*(n.object.top-n.object.bottom)/n.object.zoom/F.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function oe(C){n.object instanceof xt&&n.object.isPerspectiveCamera||n.object instanceof jn&&n.object.isOrthographicCamera?d=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function he(C){oe(d/C)}function ve(C){oe(d*C)}function je(C){if(!n.zoomToCursor||!n.domElement)return;X=!0;let K=n.domElement.getBoundingClientRect(),A=C.clientX-K.left,ee=C.clientY-K.top,F=K.width,Y=K.height;I.x=A/F*2-1,I.y=-(ee/Y)*2+1,T.set(I.x,I.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ze(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function q(C){v.set(C.clientX,C.clientY)}function te(C){je(C),E.set(C.clientX,C.clientY)}function ye(C){p.set(C.clientX,C.clientY)}function pe(C){x.set(C.clientX,C.clientY),f.subVectors(x,v).multiplyScalar(n.rotateSpeed);let K=n.domElement;K&&(j(2*Math.PI*f.x/K.clientHeight),J(2*Math.PI*f.y/K.clientHeight)),v.copy(x),n.update()}function Le(C){L.set(C.clientX,C.clientY),R.subVectors(L,E),R.y>0?he(V()):R.y<0&&ve(V()),E.copy(L),n.update()}function Ee(C){b.set(C.clientX,C.clientY),_.subVectors(b,p).multiplyScalar(n.panSpeed),H(_.x,_.y),p.copy(b),n.update()}function We(C){je(C),C.deltaY<0?ve(V()):C.deltaY>0&&he(V()),n.update()}function Je(C){let K=!1;switch(C.code){case n.keys.UP:H(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:H(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:H(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:H(-n.keyPanSpeed,0),K=!0;break}K&&(C.preventDefault(),n.update())}function ke(){if(g.length==1)v.set(g[0].pageX,g[0].pageY);else{let C=.5*(g[0].pageX+g[1].pageX),K=.5*(g[0].pageY+g[1].pageY);v.set(C,K)}}function P(){if(g.length==1)p.set(g[0].pageX,g[0].pageY);else{let C=.5*(g[0].pageX+g[1].pageX),K=.5*(g[0].pageY+g[1].pageY);p.set(C,K)}}function It(){let C=g[0].pageX-g[1].pageX,K=g[0].pageY-g[1].pageY,A=Math.sqrt(C*C+K*K);E.set(0,A)}function Ve(){n.enableZoom&&It(),n.enablePan&&P()}function qe(){n.enableZoom&&It(),n.enableRotate&&ke()}function Te(C){if(g.length==1)x.set(C.pageX,C.pageY);else{let A=Be(C),ee=.5*(C.pageX+A.x),F=.5*(C.pageY+A.y);x.set(ee,F)}f.subVectors(x,v).multiplyScalar(n.rotateSpeed);let K=n.domElement;K&&(j(2*Math.PI*f.x/K.clientHeight),J(2*Math.PI*f.y/K.clientHeight)),v.copy(x)}function st(C){if(g.length==1)b.set(C.pageX,C.pageY);else{let K=Be(C),A=.5*(C.pageX+K.x),ee=.5*(C.pageY+K.y);b.set(A,ee)}_.subVectors(b,p).multiplyScalar(n.panSpeed),H(_.x,_.y),p.copy(b)}function Ae(C){let K=Be(C),A=C.pageX-K.x,ee=C.pageY-K.y,F=Math.sqrt(A*A+ee*ee);L.set(0,F),R.set(0,Math.pow(L.y/E.y,n.zoomSpeed)),he(R.y),E.copy(L)}function w(C){n.enableZoom&&Ae(C),n.enablePan&&st(C)}function y(C){n.enableZoom&&Ae(C),n.enableRotate&&Te(C)}function O(C){var K,A;n.enabled!==!1&&(g.length===0&&((K=n.domElement)==null||K.ownerDocument.addEventListener("pointermove",$),(A=n.domElement)==null||A.ownerDocument.addEventListener("pointerup",Q)),Re(C),C.pointerType==="touch"?$e(C):Z(C))}function $(C){n.enabled!==!1&&(C.pointerType==="touch"?ne(C):Me(C))}function Q(C){var K,A,ee;Ce(C),g.length===0&&((K=n.domElement)==null||K.releasePointerCapture(C.pointerId),(A=n.domElement)==null||A.ownerDocument.removeEventListener("pointermove",$),(ee=n.domElement)==null||ee.ownerDocument.removeEventListener("pointerup",Q)),n.dispatchEvent(o),c=a.NONE}function Z(C){let K;switch(C.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case qi.DOLLY:if(n.enableZoom===!1)return;te(C),c=a.DOLLY;break;case qi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;ye(C),c=a.PAN}else{if(n.enableRotate===!1)return;q(C),c=a.ROTATE}break;case qi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;q(C),c=a.ROTATE}else{if(n.enablePan===!1)return;ye(C),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(s)}function Me(C){if(n.enabled!==!1)switch(c){case a.ROTATE:if(n.enableRotate===!1)return;pe(C);break;case a.DOLLY:if(n.enableZoom===!1)return;Le(C);break;case a.PAN:if(n.enablePan===!1)return;Ee(C);break}}function ae(C){n.enabled===!1||n.enableZoom===!1||c!==a.NONE&&c!==a.ROTATE||(C.preventDefault(),n.dispatchEvent(s),We(C),n.dispatchEvent(o))}function de(C){n.enabled===!1||n.enablePan===!1||Je(C)}function $e(C){switch(ge(C),g.length){case 1:switch(n.touches.ONE){case $i.ROTATE:if(n.enableRotate===!1)return;ke(),c=a.TOUCH_ROTATE;break;case $i.PAN:if(n.enablePan===!1)return;P(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(n.touches.TWO){case $i.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ve(),c=a.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(s)}function ne(C){switch(ge(C),c){case a.TOUCH_ROTATE:if(n.enableRotate===!1)return;Te(C),n.update();break;case a.TOUCH_PAN:if(n.enablePan===!1)return;st(C),n.update();break;case a.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(C),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(C),n.update();break;default:c=a.NONE}}function me(C){n.enabled!==!1&&C.preventDefault()}function Re(C){g.push(C)}function Ce(C){delete S[C.pointerId];for(let K=0;K<g.length;K++)if(g[K].pointerId==C.pointerId){g.splice(K,1);return}}function ge(C){let K=S[C.pointerId];K===void 0&&(K=new De,S[C.pointerId]=K),K.set(C.pageX,C.pageY)}function Be(C){let K=C.pointerId===g[0].pointerId?g[1]:g[0];return S[K.pointerId]}this.dollyIn=(C=V())=>{ve(C),n.update()},this.dollyOut=(C=V())=>{he(C),n.update()},this.getScale=()=>d,this.setScale=C=>{oe(C),n.update()},this.getZoomScale=()=>V(),t!==void 0&&this.connect(t),this.update()}};var lw=()=>[1.5,0,0],hw=i=>[i,0,0],uw=(i,e)=>[i,e];function dw(i,e){i&1&&Ot(0,"ngt-orbit-controls")}co({Mesh:zt,MeshStandardMaterial:Gr,BoxGeometry:Xn,AmbientLight:ja,PointLight:Xa,SpotLight:Wa});co({OrbitControls:lo});var Dm=(()=>{let e=class e{constructor(){this.Math=Math,this.store=ao(),this.camera=this.store.select("camera"),this.glDomElement=this.store.select("gl","domElement")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["ng-component"]],standalone:!0,features:[qt],decls:7,vars:18,consts:[[3,"intensity"],[3,"position","intensity","angle","penumbra","decay"],[3,"position","intensity","decay"],[3,"position"],[4,"args"]],template:function(r,s){r&1&&(Ot(0,"ngt-ambient-light",0)(1,"ngt-spot-light",1)(2,"ngt-point-light",2)(3,"app-cube",3)(4,"app-cube",3),Ec(5,dw,1,0,"ngt-orbit-controls",4),Ot(6,"ngt-grid-helper")),r&2&&(jt("intensity",.5),Pn(),jt("position",10)("intensity",.5*s.Math.PI)("angle",.15)("penumbra",1)("decay",0),Pn(),jt("position",-10)("intensity",.5*s.Math.PI)("decay",0),Pn(),jt("position",pd(12,lw)),Pn(),jt("position",md(13,hw,-1.5)),Pn(),jt("args",gd(15,uw,s.camera(),s.glDomElement())))},dependencies:[Cm,Fu],styles:["[_nghost-%COMP%]{display:block;height:100dvh}"],changeDetection:0});let i=e;return i})();var Lm=(()=>{let e=class e{constructor(){this.sceneGraph=Dm}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["app-homepage"]],standalone:!0,features:[qt],decls:1,vars:1,consts:[[3,"sceneGraph"]],template:function(r,s){r&1&&Ot(0,"ngt-canvas",0),r&2&&jt("sceneGraph",s.sceneGraph)},dependencies:[Am]});let i=e;return i})();var Nm=[{path:"",component:Lm}];var fw="@",pw=(()=>{let e=class e{constructor(n,r,s,o,a){this.doc=n,this.delegate=r,this.zone=s,this.animationType=o,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=le(hd,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-RKOMYNTM.js").then(r=>r)).catch(r=>{throw new dt(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(n,r){let s=this.delegate.createRenderer(n,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let o=new zu(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(n,r);o.use(c),this.scheduler?.notify(9)}).catch(a=>{o.use(s)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){bc()},e.\u0275prov=at({token:e,factory:e.\u0275fac});let i=e;return i})(),zu=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(fw)}};function Um(i="animations"){return _o("NgAsyncAnimations"),Cn([{provide:Si,useFactory:(e,t,n)=>new pw(e,t,n,i),deps:[At,Do,Xt]},{provide:cd,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Om={providers:[_d({eventCoalescing:!0}),Tf(Nm),Wd(),Um("noop")]};var Fm=(()=>{let e=class e{constructor(){this.title="coni63"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=Wt({type:e,selectors:[["app-root"]],standalone:!0,features:[qt],decls:1,vars:0,template:function(r,s){r&1&&Ot(0,"router-outlet")},dependencies:[Ds]});let i=e;return i})();Hd(Fm,Om).catch(i=>console.error(i));
