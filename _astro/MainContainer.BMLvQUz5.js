import{i as Ye}from"./lifecycle.B2nqZi6c.js";import{q as we,c as he,r as Ee,d as U,p as Ne,s as Be,a as j,b as Y,h as w,e as O,m as ur,f as q,g as ie,E as Se,i as Te,H as Ve,j as je,k as ae,l as R,n as x,o as qe,t as T,C as cr,u as dr,v as xe,w as y,x as vr,y as Ge,z as We,A as Ie,B as hr,D as pr,F as _r,G as pe,I as gr,J as oe,K as br,L as mr,M as Ar,N as Ke,O as $r,P as wr,Q as Er,R as Nr,S as ne,T as Xe,U as Ze,V as Je,W as Sr,X as Tr,Y as Ir,Z as Pr,_ as se,$ as Cr,a0 as xr,a1 as Mr,a2 as Or,a3 as yr,a4 as _e,a5 as kr,a6 as Qe,a7 as Lr,a8 as Rr,a9 as Dr,aa as zr,ab as Me,ac as Oe,ad as Hr,ae as ge,af as Fr,ag as Ur,ah as Yr,ai as Br,aj as X,ak as er,al as rr,am as Vr,an as tr,ao as L,ap as z,aq as ee,ar as M,as as ar,at as V,au as jr,av as qr,aw as ue}from"./runtime.CUkFt5TI.js";import{a as Gr,i as Wr,b as Kr,d as Xr,c as Zr,e as Jr,n as Qr,f as et,g as H,h as C,j as rt,k as Pe,s as ce}from"./render.YTRPZgPf.js";function tt(e,r){if(r){const t=document.body;e.autofocus=!0,we(()=>{document.activeElement===t&&e.focus()})}}let ye=!1;function at(){ye||(ye=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}class Ce{anchor;#r=new Map;#t=new Map;#e=new Map;#a=new Set;#i=!0;constructor(r,t=!0){this.anchor=r,this.#i=t}#n=()=>{var r=he;if(this.#r.has(r)){var t=this.#r.get(r),a=this.#t.get(t);if(a)Ee(a),this.#a.delete(t);else{var i=this.#e.get(t);i&&(this.#t.set(t,i.effect),this.#e.delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),a=i.effect)}for(const[n,s]of this.#r){if(this.#r.delete(n),n===r)break;const f=this.#e.get(s);f&&(U(f.effect),this.#e.delete(s))}for(const[n,s]of this.#t){if(n===t||this.#a.has(n))continue;const f=()=>{if(Array.from(this.#r.values()).includes(n)){var v=document.createDocumentFragment();ur(s,v),v.append(j()),this.#e.set(n,{effect:s,fragment:v})}else U(s);this.#a.delete(n),this.#t.delete(n)};this.#i||!a?(this.#a.add(n),Ne(s,f,!1)):f()}}};#s=r=>{this.#r.delete(r);const t=Array.from(this.#r.values());for(const[a,i]of this.#e)t.includes(a)||(U(i.effect),this.#e.delete(a))};ensure(r,t){var a=he,i=Be();if(t&&!this.#t.has(r)&&!this.#e.has(r))if(i){var n=document.createDocumentFragment(),s=j();n.append(s),this.#e.set(r,{effect:Y(()=>t(s)),fragment:n})}else this.#t.set(r,Y(()=>t(this.anchor)));if(this.#r.set(a,r),i){for(const[f,l]of this.#t)f===r?a.unskip_effect(l):a.skip_effect(l);for(const[f,l]of this.#e)f===r?a.unskip_effect(l.effect):a.skip_effect(l.effect);a.oncommit(this.#n),a.ondiscard(this.#s)}else w&&(this.anchor=O),this.#n()}}function it(e,r,t=!1){w&&q();var a=new Ce(e),i=t?Se:0;function n(s,f){if(w){const o=Te(e);var l;if(o===Ve?l=0:o===je?l=!1:l=parseInt(o.substring(1)),s!==l){var v=ae();R(v),a.anchor=v,x(!1),a.ensure(s,f),x(!0);return}}a.ensure(s,f)}ie(()=>{var s=!1;r((f,l=0)=>{s=!0,n(l,f)}),s||n(!1,null)},i)}function be(e,r){return r}function nt(e,r,t){for(var a=[],i=r.length,n,s=r.length,f=0;f<i;f++){let h=r[f];Ne(h,()=>{if(n){if(n.pending.delete(h),n.done.add(h),n.pending.size===0){var c=e.outrogroups;me(Ie(n.done)),c.delete(n),c.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=a.length===0&&t!==null;if(l){var v=t,o=v.parentNode;mr(o),o.append(v),e.items.clear()}me(r,!l)}else n={pending:new Set(r),done:new Set},(e.outrogroups??=new Set).add(n)}function me(e,r=!0){for(var t=0;t<e.length;t++)U(e[t],r)}var ke;function Ae(e,r,t,a,i,n=null){var s=e,f=new Map,l=(r&Ke)!==0;if(l){var v=e;s=w?R(qe(v)):v.appendChild(j())}w&&q();var o=null,h=Ge(()=>{var d=t();return We(d)?d:d==null?[]:Ie(d)}),c,p=!0;function _(){u.fallback=o,st(u,c,s,r,a),o!==null&&(c.length===0?(o.f&y)===0?Ee(o):(o.f^=y,re(o,null,s)):Ne(o,()=>{o=null}))}var E=ie(()=>{c=T(h);var d=c.length;let N=!1;if(w){var m=Te(s)===je;m!==(d===0)&&(s=ae(),R(s),x(!1),N=!0)}for(var b=new Set,I=he,A=Be(),g=0;g<d;g+=1){w&&O.nodeType===cr&&O.data===dr&&(s=O,N=!0,x(!1));var S=c[g],P=a(S,g),$=p?null:f.get(P);$?($.v&&xe($.v,S),$.i&&xe($.i,g),A&&I.unskip_effect($.e)):($=ft(f,p?s:ke??=j(),S,P,g,i,r,t),p||($.e.f|=y),f.set(P,$)),b.add(P)}if(d===0&&n&&!o&&(p?o=Y(()=>n(s)):(o=Y(()=>n(ke??=j())),o.f|=y)),d>b.size&&vr(),w&&d>0&&R(ae()),!p)if(A){for(const[fe,le]of f)b.has(fe)||I.skip_effect(le.e);I.oncommit(_),I.ondiscard(()=>{})}else _();N&&x(!0),T(h)}),u={effect:E,items:f,outrogroups:null,fallback:o};p=!1,w&&(s=O)}function Z(e){for(;e!==null&&(e.f&br)===0;)e=e.next;return e}function st(e,r,t,a,i){var n=(a&$r)!==0,s=r.length,f=e.items,l=Z(e.effect.first),v,o=null,h,c=[],p=[],_,E,u,d;if(n)for(d=0;d<s;d+=1)_=r[d],E=i(_,d),u=f.get(E).e,(u.f&y)===0&&(u.nodes?.a?.measure(),(h??=new Set).add(u));for(d=0;d<s;d+=1){if(_=r[d],E=i(_,d),u=f.get(E).e,e.outrogroups!==null)for(const $ of e.outrogroups)$.pending.delete(u),$.done.delete(u);if((u.f&y)!==0)if(u.f^=y,u===l)re(u,null,t);else{var N=o?o.next:l;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),k(e,o,u),k(e,u,N),re(u,N,t),o=u,c=[],p=[],l=Z(o.next);continue}if((u.f&oe)!==0&&(Ee(u),n&&(u.nodes?.a?.unfix(),(h??=new Set).delete(u))),u!==l){if(v!==void 0&&v.has(u)){if(c.length<p.length){var m=p[0],b;o=m.prev;var I=c[0],A=c[c.length-1];for(b=0;b<c.length;b+=1)re(c[b],m,t);for(b=0;b<p.length;b+=1)v.delete(p[b]);k(e,I.prev,A.next),k(e,o,I),k(e,A,m),l=m,o=A,d-=1,c=[],p=[]}else v.delete(u),re(u,l,t),k(e,u.prev,u.next),k(e,u,o===null?e.effect.first:o.next),k(e,o,u),o=u;continue}for(c=[],p=[];l!==null&&l!==u;)(v??=new Set).add(l),p.push(l),l=Z(l.next);if(l===null)continue}(u.f&y)===0&&c.push(u),o=u,l=Z(u.next)}if(e.outrogroups!==null){for(const $ of e.outrogroups)$.pending.size===0&&(me(Ie($.done)),e.outrogroups?.delete($));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||v!==void 0){var g=[];if(v!==void 0)for(u of v)(u.f&oe)===0&&g.push(u);for(;l!==null;)(l.f&oe)===0&&l!==e.fallback&&g.push(l),l=Z(l.next);var S=g.length;if(S>0){var P=(a&Ke)!==0&&s===0?t:null;if(n){for(d=0;d<S;d+=1)g[d].nodes?.a?.measure();for(d=0;d<S;d+=1)g[d].nodes?.a?.fix()}nt(e,g,P)}}n&&we(()=>{if(h!==void 0)for(u of h)u.nodes?.a?.apply()})}function ft(e,r,t,a,i,n,s,f){var l=(s&hr)!==0?(s&pr)===0?_r(t,!1,!1):pe(t):null,v=(s&gr)!==0?pe(i):null;return{v:l,i:v,e:Y(()=>(n(r,l??t,v??i,f),()=>{e.delete(a)}))}}function re(e,r,t){if(e.nodes)for(var a=e.nodes.start,i=e.nodes.end,n=r&&(r.f&y)===0?r.nodes.start:t;a!==null;){var s=Ar(a);if(n.before(a),a===i)return;a=s}}function k(e,r,t){r===null?e.effect.first=t:r.next=t,t===null?e.effect.last=r:t.prev=r}function B(e,r,t,a,i){w&&q();var n=r.$$slots?.[t],s=!1;n===!0&&(n=r.children,s=!0),n===void 0||n(e,s?()=>a:a)}function lt(e,r,t){var a;w&&(a=O,q());var i=new Ce(e);ie(()=>{var n=r()??null;if(w){var s=Te(a),f=s===Ve,l=n!==null;if(f!==l){var v=ae();R(v),i.anchor=v,x(!1),i.ensure(n,n&&(o=>t(o,n))),x(!0);return}}i.ensure(n,n&&(o=>t(o,n)))},Se)}function ot(e,r,t,a,i,n){let s=w;w&&q();var f=null;w&&O.nodeType===wr&&(f=O,q());var l=w?O:e,v=new Ce(l,!1);ie(()=>{const o=r()||null;var h=Nr;if(o===null){v.ensure(null,null);return}return v.ensure(o,c=>{if(o){if(f=w?f:Er(o,h),Gr(f,f),a){w&&Wr(o)&&f.append(document.createComment(""));var p=w?qe(f):f.appendChild(j());w&&(p===null?x(!1):R(p)),a(f,p)}ne.nodes.end=f,c.before(f)}w&&R(c)}),()=>{}},Se),Xe(()=>{}),s&&(x(!0),R(l))}function ut(e,r){var t=void 0,a;Ze(()=>{t!==(t=r())&&(a&&(U(a),a=null),t&&(a=Y(()=>{Je(()=>t(e))})))})}function ir(e){var r,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(r=0;r<i;r++)e[r]&&(t=ir(e[r]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function ct(){for(var e,r,t=0,a="",i=arguments.length;t<i;t++)(e=arguments[t])&&(r=ir(e))&&(a&&(a+=" "),a+=r);return a}function dt(e){return typeof e=="object"?ct(e):e??""}const Le=[...` 	
\r\f \v\uFEFF`];function vt(e,r,t){var a=e==null?"":""+e;if(t){for(var i of Object.keys(t))if(t[i])a=a?a+" "+i:i;else if(a.length)for(var n=i.length,s=0;(s=a.indexOf(i,s))>=0;){var f=s+n;(s===0||Le.includes(a[s-1]))&&(f===a.length||Le.includes(a[f]))?a=(s===0?"":a.substring(0,s))+a.substring(f+1):s=f}}return a===""?null:a}function Re(e,r=!1){var t=r?" !important;":";",a="";for(var i of Object.keys(e)){var n=e[i];n!=null&&n!==""&&(a+=" "+i+": "+n+t)}return a}function de(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ht(e,r){if(r){var t="",a,i;if(Array.isArray(r)?(a=r[0],i=r[1]):a=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,s=0,f=!1,l=[];a&&l.push(...Object.keys(a).map(de)),i&&l.push(...Object.keys(i).map(de));var v=0,o=-1;const E=e.length;for(var h=0;h<E;h++){var c=e[h];if(f?c==="/"&&e[h-1]==="*"&&(f=!1):n?n===c&&(n=!1):c==="/"&&e[h+1]==="*"?f=!0:c==='"'||c==="'"?n=c:c==="("?s++:c===")"&&s--,!f&&n===!1&&s===0){if(c===":"&&o===-1)o=h;else if(c===";"||h===E-1){if(o!==-1){var p=de(e.substring(v,o).trim());if(!l.includes(p)){c!==";"&&h++;var _=e.substring(v,h).trim();t+=" "+_+";"}}v=h+1,o=-1}}}}return a&&(t+=Re(a)),i&&(t+=Re(i,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function nr(e,r,t,a,i,n){var s=e.__className;if(w||s!==t||s===void 0){var f=vt(t,a,n);(!w||f!==e.getAttribute("class"))&&(f==null?e.removeAttribute("class"):r?e.className=f:e.setAttribute("class",f)),e.__className=t}else if(n&&i!==n)for(var l in n){var v=!!n[l];(i==null||v!==!!i[l])&&e.classList.toggle(l,v)}return n}function ve(e,r={},t,a){for(var i in t){var n=t[i];r[i]!==n&&(t[i]==null?e.style.removeProperty(i):e.style.setProperty(i,n,a))}}function pt(e,r,t,a){var i=e.__style;if(w||i!==r){var n=ht(r,a);(!w||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=r}else a&&(Array.isArray(a)?(ve(e,t?.[0],a[0]),ve(e,t?.[1],a[1],"important")):ve(e,t,a));return a}function $e(e,r,t=!1){if(e.multiple){if(r==null)return;if(!We(r))return Sr();for(var a of e.options)a.selected=r.includes(De(a));return}for(a of e.options){var i=De(a);if(Tr(i,r)){a.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function _t(e){var r=new MutationObserver(()=>{$e(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xe(()=>{r.disconnect()})}function De(e){return"__value"in e?e.__value:e.value}const J=Symbol("class"),Q=Symbol("style"),sr=Symbol("is custom element"),fr=Symbol("is html"),gt=se?"link":"LINK",bt=se?"input":"INPUT",mt=se?"option":"OPTION",At=se?"select":"SELECT";function $t(e){if(w){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var a=e.value;G(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var i=e.checked;G(e,"checked",null),e.checked=i}}};e.__on_r=t,we(t),at()}}function wt(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function G(e,r,t,a){var i=lr(e);w&&(i[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName===gt)||i[r]!==(i[r]=t)&&(r==="loading"&&(e[Or]=t),t==null?e.removeAttribute(r):typeof t!="string"&&or(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Et(e,r,t,a,i=!1,n=!1){if(w&&i&&e.nodeName===bt){var s=e,f=s.type==="checkbox"?"defaultChecked":"defaultValue";f in t||$t(s)}var l=lr(e),v=l[sr],o=!l[fr];let h=w&&v;h&&x(!1);var c=r||{},p=e.nodeName===mt;for(var _ in r)_ in t||(t[_]=null);t.class?t.class=dt(t.class):t[J]&&(t.class=null),t[Q]&&(t.style??=null);var E=or(e);for(const A in t){let g=t[A];if(p&&A==="value"&&g==null){e.value=e.__value="",c[A]=g;continue}if(A==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";nr(e,u,g,a,r?.[J],t[J]),c[A]=g,c[J]=t[J];continue}if(A==="style"){pt(e,g,r?.[Q],t[Q]),c[A]=g,c[Q]=t[Q];continue}var d=c[A];if(!(g===d&&!(g===void 0&&e.hasAttribute(A)))){c[A]=g;var N=A[0]+A[1];if(N!=="$$")if(N==="on"){const S={},P="$$"+A;let $=A.slice(2);var m=et($);if(Kr($)&&($=$.slice(0,-7),S.capture=!0),!m&&d){if(g!=null)continue;e.removeEventListener($,c[P],S),c[P]=null}if(m)Xr($,e,g),Zr([$]);else if(g!=null){let fe=function(le){c[A].call(this,le)};c[P]=Jr($,e,fe,S)}}else if(A==="style")G(e,A,g);else if(A==="autofocus")tt(e,!!g);else if(!v&&(A==="__value"||A==="value"&&g!=null))e.value=e.__value=g;else if(A==="selected"&&p)wt(e,g);else{var b=A;o||(b=Qr(b));var I=b==="defaultValue"||b==="defaultChecked";if(g==null&&!v&&!I)if(l[A]=null,b==="value"||b==="checked"){let S=e;const P=r===void 0;if(b==="value"){let $=S.defaultValue;S.removeAttribute(b),S.defaultValue=$,S.value=S.__value=P?$:null}else{let $=S.defaultChecked;S.removeAttribute(b),S.defaultChecked=$,S.checked=P?$:!1}}else e.removeAttribute(A);else I||E.includes(b)&&(v||typeof g!="string")?(e[b]=g,b in l&&(l[b]=Cr)):typeof g!="function"&&G(e,b,g)}}}return h&&x(!0),c}function ze(e,r,t=[],a=[],i=[],n,s=!1,f=!1){Ir(i,t,a,l=>{var v=void 0,o={},h=e.nodeName===At,c=!1;if(Ze(()=>{var _=r(...l.map(T)),E=Et(e,v,_,n,s,f);c&&h&&"value"in _&&$e(e,_.value);for(let d of Object.getOwnPropertySymbols(o))_[d]||U(o[d]);for(let d of Object.getOwnPropertySymbols(_)){var u=_[d];d.description===Pr&&(!v||u!==v[d])&&(o[d]&&U(o[d]),o[d]=Y(()=>ut(e,()=>u))),E[d]=u}v=E}),h){var p=e;Je(()=>{$e(p,v.value,!0),_t(p)})}c=!0})}function lr(e){return e.__attributes??={[sr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===xr}}var He=new Map;function or(e){var r=e.getAttribute("is")||e.nodeName,t=He.get(r);if(t)return t;He.set(r,t=[]);for(var a,i=e,n=Element.prototype;n!==i;){a=yr(i);for(var s in a)a[s].set&&t.push(s);i=Mr(i)}return t}let te=!1;function Nt(e){var r=te;try{return te=!1,[e(),te]}finally{te=r}}const St={get(e,r){if(!e.exclude.includes(r))return T(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){if(!(r in e.special)){var a=ne;try{Oe(e.parent_effect),e.special[r]=F({get[r](){return e.props[r]}},r,Qe)}finally{Oe(a)}}return e.special[r](t),Me(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Me(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function D(e,r){return new Proxy({props:e,exclude:r,special:{},version:pe(0),parent_effect:ne},St)}const Tt={get(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(X(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,t){let a=e.props.length;for(;a--;){let i=e.props[a];X(i)&&(i=i());const n=_e(i,r);if(n&&n.set)return n.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let a=e.props[t];if(X(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const i=_e(a,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===er||r===rr)return!1;for(let t of e.props)if(X(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props)if(X(t)&&(t=t()),!!t){for(const a in t)r.includes(a)||r.push(a);for(const a of Object.getOwnPropertySymbols(t))r.includes(a)||r.push(a)}return r}};function W(...e){return new Proxy({props:e},Tt)}function F(e,r,t,a){var i=!Fr||(t&Ur)!==0,n=(t&Hr)!==0,s=(t&Vr)!==0,f=a,l=!0,v=()=>(l&&(l=!1,f=s?ge(a):a),f),o;if(n){var h=er in e||rr in e;o=_e(e,r)?.set??(h&&r in e?m=>e[r]=m:void 0)}var c,p=!1;n?[c,p]=Nt(()=>e[r]):c=e[r],c===void 0&&a!==void 0&&(c=v(),o&&(i&&kr(),o(c)));var _;if(i?_=()=>{var m=e[r];return m===void 0?v():(l=!0,m)}:_=()=>{var m=e[r];return m!==void 0&&(f=void 0),m===void 0?f:m},i&&(t&Qe)===0)return _;if(o){var E=e.$$legacy;return(function(m,b){return arguments.length>0?((!i||!b||E||p)&&o(b?_():m),m):_()})}var u=!1,d=((t&Yr)!==0?Br:Ge)(()=>(u=!1,_()));n&&T(d);var N=ne;return(function(m,b){if(arguments.length>0){const I=b?T(d):i&&n?Lr(m):m;return Rr(d,I),u=!0,f!==void 0&&(f=I),m}return Dr&&u||(N.f&zr)!==0?d.v:T(d)})}/**
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
 */const It={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Pt=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const Fe=(...e)=>e.filter((r,t,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===t).join(" ").trim();var Ct=rt("<svg><!><!></svg>");function K(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]),a=D(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);tr(r,!1);let i=F(r,"name",8,void 0),n=F(r,"color",8,"currentColor"),s=F(r,"size",8,24),f=F(r,"strokeWidth",8,2),l=F(r,"absoluteStrokeWidth",8,!1),v=F(r,"iconNode",24,()=>[]);Ye();var o=Ct();ze(o,(p,_,E)=>({...It,...p,...a,width:s(),height:s(),stroke:n(),"stroke-width":_,class:E}),[()=>Pt(a)?void 0:{"aria-hidden":"true"},()=>(V(l()),V(f()),V(s()),ge(()=>l()?Number(f())*24/Number(s()):f())),()=>(V(Fe),V(i()),V(t),ge(()=>Fe("lucide-icon","lucide",i()?`lucide-${i()}`:"",t.class)))]);var h=L(o);Ae(h,1,v,be,(p,_)=>{var E=jr(()=>qr(T(_),2));let u=()=>T(E)[0],d=()=>T(E)[1];var N=H(),m=z(N);ot(m,u,!0,(b,I)=>{ze(b,()=>({...d()}))}),C(p,N)});var c=ee(h);B(c,r,"default",{}),M(o),C(e,o),ar()}function xt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];K(e,W({name:"brush"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}function Mt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];K(e,W({name:"code"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}function Ot(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"6",cy:"14",r:"3"}]];K(e,W({name:"file-badge"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}function yt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M8 14a2 2 0 0 0 2-2V8H8"}]];K(e,W({name:"message-square-quote"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}function kt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];K(e,W({name:"search"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}function Lt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const a=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];K(e,W({name:"user-round"},()=>t,{get iconNode(){return a},children:(i,n)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(i,s)},$$slots:{default:!0}}))}const Ue=[{name:"Profile",icon:Lt,link:"/"},{name:"Research",icon:kt,link:"https://research.mf-chan.com"},{name:"Design",icon:xt,link:"https://design.mf-chan.com"},{name:"Code",icon:Mt,link:"https://code.mf-chan.com"},{name:"Mentor",icon:yt,link:"https://mentor.mf-chan.com"},{name:"Certificate",icon:Ot,link:"https://certificate.mf-chan.com"}];var Rt=Pe('<li><a target="_blank" class="inline-block px-4 py-2"><!> </a></li>'),Dt=Pe('<a target="_blank" class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"> </a>'),zt=Pe(`<main class="max-w-[90%] sm:max-w-[700px] lg:max-w-[800px]"><ul class="hidden lg:flex justify-start items-end gap-[3px] m-0 p-0 text-sm h-[50px]"></ul> <div class="p-3 bg-white rounded-xl lg:rounded-tl-none shadow-lg"><div class="flex flex-col lg:flex-row"><div class="mx-auto lg:ms-3 lg:me-0 my-3 lg:my-0 px-3 lg:py-3 w-1/4 lg:w-1/5 min-w-[120px]"><div class="max-w-[200px]"><img src="/og.png" alt="Profile picture" class="rounded-full" title="Hai!"/></div></div> <div class="px-3 md:px-12 lg:px-3 text-center lg:text-left lg:w-3/4"><h1 class="mb-1 lg:mt-3 lg:mb-1 text-3xl">Faizal <abbr class="cursor-help" title="Chaniago">Chan.</abbr></h1> <p class="mt-1 mb-3 text-gray-400">@moefc32</p> <p class="mb-3 lg:mb-6">Strong design management professional with a master of
                    management degree from Telkom University. Need mentoring
                    about UX Engineering or other topics? Feel free to <a href="mailto:hai@mf-chan.com" class="text-blue-500 hover:text-green-500 underline">contact me</a>!</p></div> <div class="flex flex-col gap-1 lg:hidden my-6 px-3"></div></div> <div class="mb-3 text-gray-500 text-center lg:text-sm"> </div></div></main>`);function Yt(e,r){tr(r,!1);const t=new Date().getFullYear(),a=(t>2018?"2018 - ":"")+t;Ye();var i=zt(),n=L(i);Ae(n,5,()=>Ue,be,(h,c,p)=>{var _=Rt();nr(_,1,"block pb-1 cursor-pointer rounded-t-lg h-[36px] "+(p===0?"bg-white":"bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px]"));var E=L(_),u=L(E);lt(u,()=>T(c).icon,(N,m)=>{m(N,{size:16,class:"inline-block me-1"})});var d=ee(u);M(E),M(_),ue(()=>{G(E,"href",T(c).link),ce(d,` ${T(c).name??""}`)}),C(h,_)}),M(n);var s=ee(n,2),f=L(s),l=ee(L(f),4);Ae(l,5,()=>Ue,be,(h,c,p)=>{var _=H(),E=z(_);{var u=d=>{var N=Dt(),m=L(N,!0);M(N),ue(()=>{G(N,"href",T(c).link),ce(m,T(c).name)}),C(d,N)};it(E,d=>{p!==0&&d(u)})}C(h,_)}),M(l),M(f);var v=ee(f,2),o=L(v);M(v),M(s),M(i),ue(()=>ce(o,`Mfc © ${a}`)),C(e,i),ar()}export{Yt as default};
