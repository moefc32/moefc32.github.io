import{i as Ue}from"./lifecycle.BgAb408p.js";import{q as we,r as $e,I as ie,d as Y,p as Ee,s as Ye,c as G,b as B,a as Be,h as w,e as O,m as Ve,f as W,g as fe,E as Ne,i as Se,j as se,k as D,l as M,n as je,o as y,H as dr,C as vr,t as hr,u as Pe,v as k,w as pr,x as qe,y as Ge,z as Te,A as _r,B as gr,D as mr,F as he,G as br,J as We,K as Ar,L as wr,M as $r,N as Ke,O as Er,P as Nr,Q as Sr,R as Tr,S as yr,T as le,U as Xe,V as Ze,W as Je,X as Ir,Y as Pr,Z as Cr,_ as Mr,$ as xr,a0 as oe,a1 as Or,a2 as kr,a3 as Lr,a4 as Rr,a5 as pe,a6 as Dr,a7 as Qe,a8 as zr,a9 as Hr,aa as Fr,ab as Ce,ac as Me,ad as Ur,ae as _e,af as Yr,ag as Br,ah as Vr,ai as jr,aj as J,ak as er,al as rr,am as qr,an as tr,ao as R,ap as H,aq as te,ar as x,as as nr,at as q,au as Gr,av as Wr,aw as ue}from"./runtime.lZdu8eg_.js";import{a as Kr,i as Xr,b as Zr,d as Jr,c as Qr,e as et,n as rt,f as tt,g as F,h as I,j as nt,k as ye,s as ce}from"./render.KE8mHljp.js";function it(e,r){if(r){const t=document.body;e.autofocus=!0,we(()=>{document.activeElement===t&&e.focus()})}}let xe=!1;function at(){xe||(xe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}class Ie{anchor;#r=new Map;#t=new Map;#e=new Map;#n=new Set;#i=!0;constructor(r,t=!0){this.anchor=r,this.#i=t}#a=r=>{if(this.#r.has(r)){var t=this.#r.get(r),n=this.#t.get(t);if(n)$e(n),this.#n.delete(t);else{var i=this.#e.get(t);i&&(i.effect.f&ie)===0&&(this.#t.set(t,i.effect),this.#e.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[a,s]of this.#r){if(this.#r.delete(a),a===r)break;const f=this.#e.get(s);f&&(Y(f.effect),this.#e.delete(s))}for(const[a,s]of this.#t){if(a===t||this.#n.has(a)||(s.f&ie)!==0)continue;const f=()=>{if(Array.from(this.#r.values()).includes(a)){var d=document.createDocumentFragment();Ve(s,d),d.append(G()),this.#e.set(a,{effect:s,fragment:d})}else Y(s);this.#n.delete(a),this.#t.delete(a)};this.#i||!n?(this.#n.add(a),Ee(s,f,!1)):f()}}};#s=r=>{this.#r.delete(r);const t=Array.from(this.#r.values());for(const[n,i]of this.#e)t.includes(n)||(Y(i.effect),this.#e.delete(n))};ensure(r,t){var n=Be,i=Ye();if(t&&!this.#t.has(r)&&!this.#e.has(r))if(i){var a=document.createDocumentFragment(),s=G();a.append(s),this.#e.set(r,{effect:B(()=>t(s)),fragment:a})}else this.#t.set(r,B(()=>t(this.anchor)));if(this.#r.set(n,r),i){for(const[f,l]of this.#t)f===r?n.unskip_effect(l):n.skip_effect(l);for(const[f,l]of this.#e)f===r?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(this.#a),n.ondiscard(this.#s)}else w&&(this.anchor=O),this.#a(n)}}function st(e,r,t=!1){var n;w&&(n=O,W());var i=new Ie(e),a=t?Ne:0;function s(f,l){if(w){var d=Se(n);if(f!==parseInt(d.substring(1))){var o=se();D(o),i.anchor=o,M(!1),i.ensure(f,l),M(!0);return}}i.ensure(f,l)}fe(()=>{var f=!1;r((l,d=0)=>{f=!0,s(d,l)}),f||s(-1,null)},a)}function ge(e,r){return r}function ft(e,r,t){for(var n=[],i=r.length,a,s=r.length,f=0;f<i;f++){let _=r[f];Ee(_,()=>{if(a){if(a.pending.delete(_),a.done.add(_),a.pending.size===0){var u=e.outrogroups;me(e,Te(a.done)),u.delete(a),u.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&t!==null;if(l){var d=t,o=d.parentNode;wr(o),o.append(d),e.items.clear()}me(e,r,!l)}else a={pending:new Set(r),done:new Set},(e.outrogroups??=new Set).add(a)}function me(e,r,t=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const f of s)n.add(e.items.get(f).e)}for(var i=0;i<r.length;i++){var a=r[i];if(n?.has(a)){a.f|=k;const s=document.createDocumentFragment();Ve(a,s)}else Y(r[i],t)}}var Oe;function be(e,r,t,n,i,a=null){var s=e,f=new Map,l=(r&Ke)!==0;if(l){var d=e;s=w?D(je(d)):d.appendChild(G())}w&&W();var o=null,_=qe(()=>{var h=t();return Ge(h)?h:h==null?[]:Te(h)}),u,m=new Map,p=!0;function $(h){(N.effect.f&We)===0&&(N.pending.delete(h),N.fallback=o,lt(N,u,s,r,n),o!==null&&(u.length===0?(o.f&k)===0?$e(o):(o.f^=k,ne(o,null,s)):Ee(o,()=>{o=null})))}function c(h){N.pending.delete(h)}var v=fe(()=>{u=y(_);var h=u.length;let b=!1;if(w){var P=Se(s)===dr;P!==(h===0)&&(s=se(),D(s),M(!1),b=!0)}for(var A=new Set,g=Be,S=Ye(),T=0;T<h;T+=1){w&&O.nodeType===vr&&O.data===hr&&(s=O,b=!0,M(!1));var E=u[T],j=n(E,T),C=p?null:f.get(j);C?(C.v&&Pe(C.v,E),C.i&&Pe(C.i,T),S&&g.unskip_effect(C.e)):(C=ot(f,p?s:Oe??=G(),E,j,T,i,r,t),p||(C.e.f|=k),f.set(j,C)),A.add(j)}if(h===0&&a&&!o&&(p?o=B(()=>a(s)):(o=B(()=>a(Oe??=G())),o.f|=k)),h>A.size&&pr(),w&&h>0&&D(se()),!p)if(m.set(g,A),S){for(const[ur,cr]of f)A.has(ur)||g.skip_effect(cr.e);g.oncommit($),g.ondiscard(c)}else $(g);b&&M(!0),y(_)}),N={effect:v,items:f,pending:m,outrogroups:null,fallback:o};p=!1,w&&(s=O)}function Q(e){for(;e!==null&&(e.f&Ar)===0;)e=e.next;return e}function lt(e,r,t,n,i){var a=(n&Er)!==0,s=r.length,f=e.items,l=Q(e.effect.first),d,o=null,_,u=[],m=[],p,$,c,v;if(a)for(v=0;v<s;v+=1)p=r[v],$=i(p,v),c=f.get($).e,(c.f&k)===0&&(c.nodes?.a?.measure(),(_??=new Set).add(c));for(v=0;v<s;v+=1){if(p=r[v],$=i(p,v),c=f.get($).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(c),E.done.delete(c);if((c.f&k)!==0)if(c.f^=k,c===l)ne(c,null,t);else{var N=o?o.next:l;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),L(e,o,c),L(e,c,N),ne(c,N,t),o=c,u=[],m=[],l=Q(o.next);continue}if((c.f&ie)!==0&&($e(c),a&&(c.nodes?.a?.unfix(),(_??=new Set).delete(c))),c!==l){if(d!==void 0&&d.has(c)){if(u.length<m.length){var h=m[0],b;o=h.prev;var P=u[0],A=u[u.length-1];for(b=0;b<u.length;b+=1)ne(u[b],h,t);for(b=0;b<m.length;b+=1)d.delete(m[b]);L(e,P.prev,A.next),L(e,o,P),L(e,A,h),l=h,o=A,v-=1,u=[],m=[]}else d.delete(c),ne(c,l,t),L(e,c.prev,c.next),L(e,c,o===null?e.effect.first:o.next),L(e,o,c),o=c;continue}for(u=[],m=[];l!==null&&l!==c;)(d??=new Set).add(l),m.push(l),l=Q(l.next);if(l===null)continue}(c.f&k)===0&&u.push(c),o=c,l=Q(c.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(me(e,Te(E.done)),e.outrogroups?.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||d!==void 0){var g=[];if(d!==void 0)for(c of d)(c.f&ie)===0&&g.push(c);for(;l!==null;)(l.f&ie)===0&&l!==e.fallback&&g.push(l),l=Q(l.next);var S=g.length;if(S>0){var T=(n&Ke)!==0&&s===0?t:null;if(a){for(v=0;v<S;v+=1)g[v].nodes?.a?.measure();for(v=0;v<S;v+=1)g[v].nodes?.a?.fix()}ft(e,g,T)}}a&&we(()=>{if(_!==void 0)for(c of _)c.nodes?.a?.apply()})}function ot(e,r,t,n,i,a,s,f){var l=(s&_r)!==0?(s&gr)===0?mr(t,!1,!1):he(t):null,d=(s&br)!==0?he(i):null;return{v:l,i:d,e:B(()=>(a(r,l??t,d??i,f),()=>{e.delete(n)}))}}function ne(e,r,t){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,a=r&&(r.f&k)===0?r.nodes.start:t;n!==null;){var s=$r(n);if(a.before(n),n===i)return;n=s}}function L(e,r,t){r===null?e.effect.first=t:r.next=t,t===null?e.effect.last=r:t.prev=r}function V(e,r,t,n,i){w&&W();var a=r.$$slots?.[t],s=!1;a===!0&&(a=r.children,s=!0),a===void 0||a(e,s?()=>n:n)}function ut(e,r,t){var n;w&&(n=O,W());var i=new Ie(e);fe(()=>{var a=r()??null;if(w){var s=Se(n),f=s===Nr,l=a!==null;if(f!==l){var d=se();D(d),i.anchor=d,M(!1),i.ensure(a,a&&(o=>t(o,a))),M(!0);return}}i.ensure(a,a&&(o=>t(o,a)))},Ne)}function ct(e,r,t,n,i,a){let s=w;w&&W();var f=null;w&&O.nodeType===Sr&&(f=O,W());var l=w?O:e,d=new Ie(l,!1);fe(()=>{const o=r()||null;var _=yr;if(o===null){d.ensure(null,null);return}return d.ensure(o,u=>{if(o){if(f=w?f:Tr(o,_),Kr(f,f),n){w&&Xr(o)&&f.append(document.createComment(""));var m=w?je(f):f.appendChild(G());w&&(m===null?M(!1):D(m)),n(f,m)}le.nodes.end=f,u.before(f)}w&&D(u)}),()=>{}},Ne),Xe(()=>{}),s&&(M(!0),D(l))}function dt(e,r){var t=void 0,n;Ze(()=>{t!==(t=r())&&(n&&(Y(n),n=null),t&&(n=B(()=>{Je(()=>t(e))})))})}function ir(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=ir(e[r]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function vt(){for(var e,r,t=0,n="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=ir(e))&&(n&&(n+=" "),n+=r);return n}function ht(e){return typeof e=="object"?vt(e):e??""}const ke=[...` 	
\r\f \v\uFEFF`];function pt(e,r,t){var n=e==null?"":""+e;if(t){for(var i of Object.keys(t))if(t[i])n=n?n+" "+i:i;else if(n.length)for(var a=i.length,s=0;(s=n.indexOf(i,s))>=0;){var f=s+a;(s===0||ke.includes(n[s-1]))&&(f===n.length||ke.includes(n[f]))?n=(s===0?"":n.substring(0,s))+n.substring(f+1):s=f}}return n===""?null:n}function Le(e,r=!1){var t=r?" !important;":";",n="";for(var i of Object.keys(e)){var a=e[i];a!=null&&a!==""&&(n+=" "+i+": "+a+t)}return n}function de(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function _t(e,r){if(r){var t="",n,i;if(Array.isArray(r)?(n=r[0],i=r[1]):n=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,f=!1,l=[];n&&l.push(...Object.keys(n).map(de)),i&&l.push(...Object.keys(i).map(de));var d=0,o=-1;const $=e.length;for(var _=0;_<$;_++){var u=e[_];if(f?u==="/"&&e[_-1]==="*"&&(f=!1):a?a===u&&(a=!1):u==="/"&&e[_+1]==="*"?f=!0:u==='"'||u==="'"?a=u:u==="("?s++:u===")"&&s--,!f&&a===!1&&s===0){if(u===":"&&o===-1)o=_;else if(u===";"||_===$-1){if(o!==-1){var m=de(e.substring(d,o).trim());if(!l.includes(m)){u!==";"&&_++;var p=e.substring(d,_).trim();t+=" "+p+";"}}d=_+1,o=-1}}}}return n&&(t+=Le(n)),i&&(t+=Le(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function ar(e,r,t,n,i,a){var s=e.__className;if(w||s!==t||s===void 0){var f=pt(t,n,a);(!w||f!==e.getAttribute("class"))&&(f==null?e.removeAttribute("class"):r?e.className=f:e.setAttribute("class",f)),e.__className=t}else if(a&&i!==a)for(var l in a){var d=!!a[l];(i==null||d!==!!i[l])&&e.classList.toggle(l,d)}return a}function ve(e,r={},t,n){for(var i in t){var a=t[i];r[i]!==a&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,a,n))}}function gt(e,r,t,n){var i=e.__style;if(w||i!==r){var a=_t(r,n);(!w||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=r}else n&&(Array.isArray(n)?(ve(e,t?.[0],n[0]),ve(e,t?.[1],n[1],"important")):ve(e,t,n));return n}function Ae(e,r,t=!1){if(e.multiple){if(r==null)return;if(!Ge(r))return Ir();for(var n of e.options)n.selected=r.includes(Re(n));return}for(n of e.options){var i=Re(n);if(Pr(i,r)){n.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function mt(e){var r=new MutationObserver(()=>{Ae(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xe(()=>{r.disconnect()})}function Re(e){return"__value"in e?e.__value:e.value}const ee=Symbol("class"),re=Symbol("style"),sr=Symbol("is custom element"),fr=Symbol("is html"),bt=oe?"link":"LINK",At=oe?"input":"INPUT",wt=oe?"option":"OPTION",$t=oe?"select":"SELECT";function Et(e){if(w){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var n=e.value;K(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var i=e.checked;K(e,"checked",null),e.checked=i}}};e.__on_r=t,we(t),at()}}function Nt(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function K(e,r,t,n){var i=lr(e);w&&(i[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName===bt)||i[r]!==(i[r]=t)&&(r==="loading"&&(e[Lr]=t),t==null?e.removeAttribute(r):typeof t!="string"&&or(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function St(e,r,t,n,i=!1,a=!1){if(w&&i&&e.nodeName===At){var s=e,f=s.type==="checkbox"?"defaultChecked":"defaultValue";f in t||Et(s)}var l=lr(e),d=l[sr],o=!l[fr];let _=w&&d;_&&M(!1);var u=r||{},m=e.nodeName===wt;for(var p in r)p in t||(t[p]=null);t.class?t.class=ht(t.class):t[ee]&&(t.class=null),t[re]&&(t.style??=null);var $=or(e);for(const A in t){let g=t[A];if(m&&A==="value"&&g==null){e.value=e.__value="",u[A]=g;continue}if(A==="class"){var c=e.namespaceURI==="http://www.w3.org/1999/xhtml";ar(e,c,g,n,r?.[ee],t[ee]),u[A]=g,u[ee]=t[ee];continue}if(A==="style"){gt(e,g,r?.[re],t[re]),u[A]=g,u[re]=t[re];continue}var v=u[A];if(!(g===v&&!(g===void 0&&e.hasAttribute(A)))){u[A]=g;var N=A[0]+A[1];if(N!=="$$")if(N==="on"){const S={},T="$$"+A;let E=A.slice(2);var h=tt(E);if(Zr(E)&&(E=E.slice(0,-7),S.capture=!0),!h&&v){if(g!=null)continue;e.removeEventListener(E,u[T],S),u[T]=null}if(h)Jr(E,e,g),Qr([E]);else if(g!=null){let j=function(C){u[A].call(this,C)};u[T]=et(E,e,j,S)}}else if(A==="style")K(e,A,g);else if(A==="autofocus")it(e,!!g);else if(!d&&(A==="__value"||A==="value"&&g!=null))e.value=e.__value=g;else if(A==="selected"&&m)Nt(e,g);else{var b=A;o||(b=rt(b));var P=b==="defaultValue"||b==="defaultChecked";if(g==null&&!d&&!P)if(l[A]=null,b==="value"||b==="checked"){let S=e;const T=r===void 0;if(b==="value"){let E=S.defaultValue;S.removeAttribute(b),S.defaultValue=E,S.value=S.__value=T?E:null}else{let E=S.defaultChecked;S.removeAttribute(b),S.defaultChecked=E,S.checked=T?E:!1}}else e.removeAttribute(A);else P||$.includes(b)&&(d||typeof g!="string")?(e[b]=g,b in l&&(l[b]=kr)):typeof g!="function"&&K(e,b,g)}}}return _&&M(!0),u}function De(e,r,t=[],n=[],i=[],a,s=!1,f=!1){Cr(i,t,n,l=>{var d=void 0,o={},_=e.nodeName===$t,u=!1;if(Ze(()=>{var p=r(...l.map(y)),$=St(e,d,p,a,s,f);u&&_&&"value"in p&&Ae(e,p.value);for(let v of Object.getOwnPropertySymbols(o))p[v]||Y(o[v]);for(let v of Object.getOwnPropertySymbols(p)){var c=p[v];v.description===Mr&&(!d||c!==d[v])&&(o[v]&&Y(o[v]),o[v]=B(()=>dt(e,()=>c))),$[v]=c}d=$}),_){var m=e;Je(()=>{Ae(m,d.value,!0),mt(m)})}u=!0})}function lr(e){return e.__attributes??={[sr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===xr}}var ze=new Map;function or(e){var r=e.getAttribute("is")||e.nodeName,t=ze.get(r);if(t)return t;ze.set(r,t=[]);for(var n,i=e,a=Element.prototype;a!==i;){n=Rr(i);for(var s in n)n[s].set&&t.push(s);i=Or(i)}return t}let ae=!1;function Tt(e){var r=ae;try{return ae=!1,[e(),ae]}finally{ae=r}}const yt={get(e,r){if(!e.exclude.includes(r))return y(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){if(!(r in e.special)){var n=le;try{Me(e.parent_effect),e.special[r]=U({get[r](){return e.props[r]}},r,Qe)}finally{Me(n)}}return e.special[r](t),Ce(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Ce(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function z(e,r){return new Proxy({props:e,exclude:r,special:{},version:he(0),parent_effect:le},yt)}const It={get(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(J(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,t){let n=e.props.length;for(;n--;){let i=e.props[n];J(i)&&(i=i());const a=pe(i,r);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let n=e.props[t];if(J(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const i=pe(n,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===er||r===rr)return!1;for(let t of e.props)if(J(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props)if(J(t)&&(t=t()),!!t){for(const n in t)r.includes(n)||r.push(n);for(const n of Object.getOwnPropertySymbols(t))r.includes(n)||r.push(n)}return r}};function X(...e){return new Proxy({props:e},It)}function U(e,r,t,n){var i=!Yr||(t&Br)!==0,a=(t&Ur)!==0,s=(t&qr)!==0,f=n,l=!0,d=()=>(l&&(l=!1,f=s?_e(n):n),f),o;if(a){var _=er in e||rr in e;o=pe(e,r)?.set??(_&&r in e?h=>e[r]=h:void 0)}var u,m=!1;a?[u,m]=Tt(()=>e[r]):u=e[r],u===void 0&&n!==void 0&&(u=d(),o&&(i&&Dr(),o(u)));var p;if(i?p=()=>{var h=e[r];return h===void 0?d():(l=!0,h)}:p=()=>{var h=e[r];return h!==void 0&&(f=void 0),h===void 0?f:h},i&&(t&Qe)===0)return p;if(o){var $=e.$$legacy;return(function(h,b){return arguments.length>0?((!i||!b||$||m)&&o(b?p():h),h):p()})}var c=!1,v=((t&Vr)!==0?jr:qe)(()=>(c=!1,p()));a&&y(v);var N=le;return(function(h,b){if(arguments.length>0){const P=b?y(v):i&&a?zr(h):h;return Hr(v,P),c=!0,f!==void 0&&(f=P),h}return Fr&&c||(N.f&We)!==0?v.v:y(v)})}/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Pt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Ct=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const He=(...e)=>e.filter((r,t,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===t).join(" ").trim();var Mt=nt("<svg><!><!></svg>");function Z(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]),n=z(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);tr(r,!1);let i=U(r,"name",8,void 0),a=U(r,"color",8,"currentColor"),s=U(r,"size",8,24),f=U(r,"strokeWidth",8,2),l=U(r,"absoluteStrokeWidth",8,!1),d=U(r,"iconNode",24,()=>[]);Ue();var o=Mt();De(o,(m,p,$)=>({...Pt,...m,...n,width:s(),height:s(),stroke:a(),"stroke-width":p,class:$}),[()=>Ct(n)?void 0:{"aria-hidden":"true"},()=>(q(l()),q(f()),q(s()),_e(()=>l()?Number(f())*24/Number(s()):f())),()=>(q(He),q(i()),q(t),_e(()=>He("lucide-icon","lucide",i()?`lucide-${i()}`:"",t.class)))]);var _=R(o);be(_,1,d,ge,(m,p)=>{var $=Gr(()=>Wr(y(p),2));let c=()=>y($)[0],v=()=>y($)[1];var N=F(),h=H(N);ct(h,c,!0,(b,P)=>{De(b,()=>({...v()}))}),I(m,N)});var u=te(_);V(u,r,"default",{}),x(o),I(e,o),nr()}function xt(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];Z(e,X({name:"brush"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}function Ot(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];Z(e,X({name:"code"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}function kt(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"6",cy:"14",r:"3"}]];Z(e,X({name:"file-badge"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}function Lt(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M8 14a2 2 0 0 0 2-2V8H8"}]];Z(e,X({name:"message-square-quote"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}function Rt(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];Z(e,X({name:"search"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}function Dt(e,r){const t=z(r,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];Z(e,X({name:"user-round"},()=>t,{get iconNode(){return n},children:(i,a)=>{var s=F(),f=H(s);V(f,r,"default",{}),I(i,s)},$$slots:{default:!0}}))}const Fe=[{name:"Profile",icon:Dt,link:"/"},{name:"Research",icon:Rt,link:"https://research.mf-chan.com"},{name:"Design",icon:xt,link:"https://design.mf-chan.com"},{name:"Code",icon:Ot,link:"https://code.mf-chan.com"},{name:"Mentor",icon:Lt,link:"https://mentor.mf-chan.com"},{name:"Certificate",icon:kt,link:"https://certificate.mf-chan.com"}];var zt=ye('<li><a target="_blank" class="inline-block px-4 py-2"><!> </a></li>'),Ht=ye('<a target="_blank" class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"> </a>'),Ft=ye(`<main class="max-w-[90%] sm:max-w-[700px] lg:max-w-[800px]"><ul class="hidden lg:flex justify-start items-end gap-[3px] m-0 p-0 text-sm h-[50px]"></ul> <div class="p-3 bg-white rounded-xl lg:rounded-tl-none shadow-lg"><div class="flex flex-col lg:flex-row"><div class="mx-auto lg:ms-3 lg:me-0 my-3 lg:my-0 px-3 lg:py-3 w-1/4 lg:w-1/5 min-w-[120px]"><div class="max-w-[200px]"><img src="/og.png" alt="Profile picture" class="rounded-full" title="Hai!"/></div></div> <div class="px-3 md:px-12 lg:px-3 text-center lg:text-left lg:w-3/4"><h1 class="mb-1 lg:mt-3 lg:mb-1 text-3xl">Faizal <abbr class="cursor-help" title="Chaniago">Chan.</abbr></h1> <p class="mt-1 mb-3 text-gray-400">@moefc32</p> <p class="mb-3 lg:mb-6">Strong design management professional with a master of
                    management degree from Telkom University. Need mentoring
                    about UX Engineering or other topics? Feel free to <a href="mailto:hai@mf-chan.com" class="text-blue-500 hover:text-green-500 underline">contact me</a>!</p></div> <div class="flex flex-col gap-1 lg:hidden my-6 px-3"></div></div> <div class="mb-3 text-gray-500 text-center lg:text-sm"> </div></div></main>`);function Vt(e,r){tr(r,!1);const t=new Date().getFullYear(),n=(t>2018?"2018 - ":"")+t;Ue();var i=Ft(),a=R(i);be(a,5,()=>Fe,ge,(_,u,m)=>{var p=zt();ar(p,1,"block pb-1 cursor-pointer rounded-t-lg h-[36px] "+(m===0?"bg-white":"bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px]"));var $=R(p),c=R($);ut(c,()=>y(u).icon,(N,h)=>{h(N,{size:16,class:"inline-block me-1"})});var v=te(c);x($),x(p),ue(()=>{K($,"href",y(u).link),ce(v,` ${y(u).name??""}`)}),I(_,p)}),x(a);var s=te(a,2),f=R(s),l=te(R(f),4);be(l,5,()=>Fe,ge,(_,u,m)=>{var p=F(),$=H(p);{var c=v=>{var N=Ht(),h=R(N,!0);x(N),ue(()=>{K(N,"href",y(u).link),ce(h,y(u).name)}),I(v,N)};st($,v=>{m!==0&&v(c)})}I(_,p)}),x(l),x(f);var d=te(f,2),o=R(d);x(d),x(s),x(i),ue(()=>ce(o,`Mfc © ${n}`)),I(e,i),nr()}export{Vt as default};
