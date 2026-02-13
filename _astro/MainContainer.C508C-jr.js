import{i as Ue}from"./lifecycle.jEUk5MTB.js";import{q as we,c as ve,r as Ee,d as F,p as Ne,s as Ye,a as j,b as Y,h as w,e as k,m as or,f as q,g as ie,E as Se,i as Be,H as ur,j as Ve,k as he,l as U,n as O,o as je,t as T,C as cr,u as dr,v as Ce,w as M,x as vr,y as qe,z as Ge,A as Te,B as hr,D as pr,F as _r,G as pe,I as gr,J as le,K as br,L as mr,M as Ar,N as We,O as $r,P as wr,Q as Er,R as Nr,S as ne,T as Ke,U as Xe,V as Ze,W as Sr,X as Tr,Y as Ir,Z as Pr,_ as ae,$ as Cr,a0 as xr,a1 as Mr,a2 as Or,a3 as yr,a4 as _e,a5 as Lr,a6 as Je,a7 as kr,a8 as Rr,a9 as Dr,aa as zr,ab as xe,ac as Me,ad as Hr,ae as ge,af as Fr,ag as Ur,ah as Yr,ai as Br,aj as X,ak as Qe,al as er,am as Vr,an as rr,ao as L,ap as D,aq as ee,ar as x,as as tr,at as V,au as jr,av as qr,aw as oe}from"./runtime.Dyr4ka9T.js";import{a as Gr,i as Wr,b as Kr,c as Xr,d as Zr,n as Jr,e as Qr,f as z,g as C,h as et,j as Ie,s as ue}from"./render.Bj8JTWOy.js";function rt(e,r){if(r){const t=document.body;e.autofocus=!0,we(()=>{document.activeElement===t&&e.focus()})}}let Oe=!1;function tt(){Oe||(Oe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}class Pe{anchor;#r=new Map;#t=new Map;#e=new Map;#i=new Set;#n=!0;constructor(r,t=!0){this.anchor=r,this.#n=t}#a=()=>{var r=ve;if(this.#r.has(r)){var t=this.#r.get(r),i=this.#t.get(t);if(i)Ee(i),this.#i.delete(t);else{var n=this.#e.get(t);n&&(this.#t.set(t,n.effect),this.#e.delete(t),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of this.#r){if(this.#r.delete(a),a===r)break;const f=this.#e.get(s);f&&(F(f.effect),this.#e.delete(s))}for(const[a,s]of this.#t){if(a===t||this.#i.has(a))continue;const f=()=>{if(Array.from(this.#r.values()).includes(a)){var v=document.createDocumentFragment();or(s,v),v.append(j()),this.#e.set(a,{effect:s,fragment:v})}else F(s);this.#i.delete(a),this.#t.delete(a)};this.#n||!i?(this.#i.add(a),Ne(s,f,!1)):f()}}};#s=r=>{this.#r.delete(r);const t=Array.from(this.#r.values());for(const[i,n]of this.#e)t.includes(i)||(F(n.effect),this.#e.delete(i))};ensure(r,t){var i=ve,n=Ye();if(t&&!this.#t.has(r)&&!this.#e.has(r))if(n){var a=document.createDocumentFragment(),s=j();a.append(s),this.#e.set(r,{effect:Y(()=>t(s)),fragment:a})}else this.#t.set(r,Y(()=>t(this.anchor)));if(this.#r.set(i,r),n){for(const[f,l]of this.#t)f===r?i.unskip_effect(l):i.skip_effect(l);for(const[f,l]of this.#e)f===r?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#a),i.ondiscard(this.#s)}else w&&(this.anchor=k),this.#a()}}function it(e,r,t=!1){w&&q();var i=new Pe(e),n=t?Se:0;function a(s,f){if(w){const o=Be(e);var l;if(o===ur?l=0:o===Ve?l=!1:l=parseInt(o.substring(1)),s!==l){var v=he();U(v),i.anchor=v,O(!1),i.ensure(s,f),O(!0);return}}i.ensure(s,f)}ie(()=>{var s=!1;r((f,l=0)=>{s=!0,a(l,f)}),s||a(!1,null)},n)}function be(e,r){return r}function nt(e,r,t){for(var i=[],n=r.length,a,s=r.length,f=0;f<n;f++){let h=r[f];Ne(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var c=e.outrogroups;me(Te(a.done)),c.delete(a),c.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=i.length===0&&t!==null;if(l){var v=t,o=v.parentNode;mr(o),o.append(v),e.items.clear()}me(r,!l)}else a={pending:new Set(r),done:new Set},(e.outrogroups??=new Set).add(a)}function me(e,r=!0){for(var t=0;t<e.length;t++)F(e[t],r)}var ye;function Ae(e,r,t,i,n,a=null){var s=e,f=new Map,l=(r&We)!==0;if(l){var v=e;s=w?U(je(v)):v.appendChild(j())}w&&q();var o=null,h=qe(()=>{var d=t();return Ge(d)?d:d==null?[]:Te(d)}),c,p=!0;function _(){u.fallback=o,at(u,c,s,r,i),o!==null&&(c.length===0?(o.f&M)===0?Ee(o):(o.f^=M,re(o,null,s)):Ne(o,()=>{o=null}))}var E=ie(()=>{c=T(h);var d=c.length;let N=!1;if(w){var m=Be(s)===Ve;m!==(d===0)&&(s=he(),U(s),O(!1),N=!0)}for(var b=new Set,I=ve,$=Ye(),g=0;g<d;g+=1){w&&k.nodeType===cr&&k.data===dr&&(s=k,N=!0,O(!1));var S=c[g],P=i(S,g),A=p?null:f.get(P);A?(A.v&&Ce(A.v,S),A.i&&Ce(A.i,g),$&&I.unskip_effect(A.e)):(A=st(f,p?s:ye??=j(),S,P,g,n,r,t),p||(A.e.f|=M),f.set(P,A)),b.add(P)}if(d===0&&a&&!o&&(p?o=Y(()=>a(s)):(o=Y(()=>a(ye??=j())),o.f|=M)),d>b.size&&vr(),w&&d>0&&U(he()),!p)if($){for(const[se,fe]of f)b.has(se)||I.skip_effect(fe.e);I.oncommit(_),I.ondiscard(()=>{})}else _();N&&O(!0),T(h)}),u={effect:E,items:f,outrogroups:null,fallback:o};p=!1,w&&(s=k)}function Z(e){for(;e!==null&&(e.f&br)===0;)e=e.next;return e}function at(e,r,t,i,n){var a=(i&$r)!==0,s=r.length,f=e.items,l=Z(e.effect.first),v,o=null,h,c=[],p=[],_,E,u,d;if(a)for(d=0;d<s;d+=1)_=r[d],E=n(_,d),u=f.get(E).e,(u.f&M)===0&&(u.nodes?.a?.measure(),(h??=new Set).add(u));for(d=0;d<s;d+=1){if(_=r[d],E=n(_,d),u=f.get(E).e,e.outrogroups!==null)for(const A of e.outrogroups)A.pending.delete(u),A.done.delete(u);if((u.f&M)!==0)if(u.f^=M,u===l)re(u,null,t);else{var N=o?o.next:l;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),y(e,o,u),y(e,u,N),re(u,N,t),o=u,c=[],p=[],l=Z(o.next);continue}if((u.f&le)!==0&&(Ee(u),a&&(u.nodes?.a?.unfix(),(h??=new Set).delete(u))),u!==l){if(v!==void 0&&v.has(u)){if(c.length<p.length){var m=p[0],b;o=m.prev;var I=c[0],$=c[c.length-1];for(b=0;b<c.length;b+=1)re(c[b],m,t);for(b=0;b<p.length;b+=1)v.delete(p[b]);y(e,I.prev,$.next),y(e,o,I),y(e,$,m),l=m,o=$,d-=1,c=[],p=[]}else v.delete(u),re(u,l,t),y(e,u.prev,u.next),y(e,u,o===null?e.effect.first:o.next),y(e,o,u),o=u;continue}for(c=[],p=[];l!==null&&l!==u;)(v??=new Set).add(l),p.push(l),l=Z(l.next);if(l===null)continue}(u.f&M)===0&&c.push(u),o=u,l=Z(u.next)}if(e.outrogroups!==null){for(const A of e.outrogroups)A.pending.size===0&&(me(Te(A.done)),e.outrogroups?.delete(A));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||v!==void 0){var g=[];if(v!==void 0)for(u of v)(u.f&le)===0&&g.push(u);for(;l!==null;)(l.f&le)===0&&l!==e.fallback&&g.push(l),l=Z(l.next);var S=g.length;if(S>0){var P=(i&We)!==0&&s===0?t:null;if(a){for(d=0;d<S;d+=1)g[d].nodes?.a?.measure();for(d=0;d<S;d+=1)g[d].nodes?.a?.fix()}nt(e,g,P)}}a&&we(()=>{if(h!==void 0)for(u of h)u.nodes?.a?.apply()})}function st(e,r,t,i,n,a,s,f){var l=(s&hr)!==0?(s&pr)===0?_r(t,!1,!1):pe(t):null,v=(s&gr)!==0?pe(n):null;return{v:l,i:v,e:Y(()=>(a(r,l??t,v??n,f),()=>{e.delete(i)}))}}function re(e,r,t){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=r&&(r.f&M)===0?r.nodes.start:t;i!==null;){var s=Ar(i);if(a.before(i),i===n)return;i=s}}function y(e,r,t){r===null?e.effect.first=t:r.next=t,t===null?e.effect.last=r:t.prev=r}function B(e,r,t,i,n){w&&q();var a=r.$$slots?.[t],s=!1;a===!0&&(a=r.children,s=!0),a===void 0||a(e,s?()=>i:i)}function ft(e,r,t){w&&q();var i=new Pe(e);ie(()=>{var n=r()??null;i.ensure(n,n&&(a=>t(a,n)))},Se)}function lt(e,r,t,i,n,a){let s=w;w&&q();var f=null;w&&k.nodeType===wr&&(f=k,q());var l=w?k:e,v=new Pe(l,!1);ie(()=>{const o=r()||null;var h=Nr;if(o===null){v.ensure(null,null);return}return v.ensure(o,c=>{if(o){if(f=w?f:Er(o,h),Gr(f,f),i){w&&Wr(o)&&f.append(document.createComment(""));var p=w?je(f):f.appendChild(j());w&&(p===null?O(!1):U(p)),i(f,p)}ne.nodes.end=f,c.before(f)}w&&U(c)}),()=>{}},Se),Ke(()=>{}),s&&(O(!0),U(l))}function ot(e,r){var t=void 0,i;Xe(()=>{t!==(t=r())&&(i&&(F(i),i=null),t&&(i=Y(()=>{Ze(()=>t(e))})))})}function ir(e){var r,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=ir(e[r]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function ut(){for(var e,r,t=0,i="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=ir(e))&&(i&&(i+=" "),i+=r);return i}function ct(e){return typeof e=="object"?ut(e):e??""}const Le=[...` 	
\r\f \v\uFEFF`];function dt(e,r,t){var i=e==null?"":""+e;if(t){for(var n in t)if(t[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,s=0;(s=i.indexOf(n,s))>=0;){var f=s+a;(s===0||Le.includes(i[s-1]))&&(f===i.length||Le.includes(i[f]))?i=(s===0?"":i.substring(0,s))+i.substring(f+1):s=f}}return i===""?null:i}function ke(e,r=!1){var t=r?" !important;":";",i="";for(var n in e){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+t)}return i}function ce(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function vt(e,r){if(r){var t="",i,n;if(Array.isArray(r)?(i=r[0],n=r[1]):i=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,f=!1,l=[];i&&l.push(...Object.keys(i).map(ce)),n&&l.push(...Object.keys(n).map(ce));var v=0,o=-1;const E=e.length;for(var h=0;h<E;h++){var c=e[h];if(f?c==="/"&&e[h-1]==="*"&&(f=!1):a?a===c&&(a=!1):c==="/"&&e[h+1]==="*"?f=!0:c==='"'||c==="'"?a=c:c==="("?s++:c===")"&&s--,!f&&a===!1&&s===0){if(c===":"&&o===-1)o=h;else if(c===";"||h===E-1){if(o!==-1){var p=ce(e.substring(v,o).trim());if(!l.includes(p)){c!==";"&&h++;var _=e.substring(v,h).trim();t+=" "+_+";"}}v=h+1,o=-1}}}}return i&&(t+=ke(i)),n&&(t+=ke(n,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function nr(e,r,t,i,n,a){var s=e.__className;if(w||s!==t||s===void 0){var f=dt(t,i,a);(!w||f!==e.getAttribute("class"))&&(f==null?e.removeAttribute("class"):r?e.className=f:e.setAttribute("class",f)),e.__className=t}else if(a&&n!==a)for(var l in a){var v=!!a[l];(n==null||v!==!!n[l])&&e.classList.toggle(l,v)}return a}function de(e,r={},t,i){for(var n in t){var a=t[n];r[n]!==a&&(t[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function ht(e,r,t,i){var n=e.__style;if(w||n!==r){var a=vt(r,i);(!w||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=r}else i&&(Array.isArray(i)?(de(e,t?.[0],i[0]),de(e,t?.[1],i[1],"important")):de(e,t,i));return i}function $e(e,r,t=!1){if(e.multiple){if(r==null)return;if(!Ge(r))return Sr();for(var i of e.options)i.selected=r.includes(Re(i));return}for(i of e.options){var n=Re(i);if(Tr(n,r)){i.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function pt(e){var r=new MutationObserver(()=>{$e(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ke(()=>{r.disconnect()})}function Re(e){return"__value"in e?e.__value:e.value}const J=Symbol("class"),Q=Symbol("style"),ar=Symbol("is custom element"),sr=Symbol("is html"),_t=ae?"link":"LINK",gt=ae?"input":"INPUT",bt=ae?"option":"OPTION",mt=ae?"select":"SELECT";function At(e){if(w){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var i=e.value;G(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var n=e.checked;G(e,"checked",null),e.checked=n}}};e.__on_r=t,we(t),tt()}}function $t(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function G(e,r,t,i){var n=fr(e);w&&(n[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName===_t)||n[r]!==(n[r]=t)&&(r==="loading"&&(e[Or]=t),t==null?e.removeAttribute(r):typeof t!="string"&&lr(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function wt(e,r,t,i,n=!1,a=!1){if(w&&n&&e.nodeName===gt){var s=e,f=s.type==="checkbox"?"defaultChecked":"defaultValue";f in t||At(s)}var l=fr(e),v=l[ar],o=!l[sr];let h=w&&v;h&&O(!1);var c=r||{},p=e.nodeName===bt;for(var _ in r)_ in t||(t[_]=null);t.class?t.class=ct(t.class):t[J]&&(t.class=null),t[Q]&&(t.style??=null);var E=lr(e);for(const $ in t){let g=t[$];if(p&&$==="value"&&g==null){e.value=e.__value="",c[$]=g;continue}if($==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";nr(e,u,g,i,r?.[J],t[J]),c[$]=g,c[J]=t[J];continue}if($==="style"){ht(e,g,r?.[Q],t[Q]),c[$]=g,c[Q]=t[Q];continue}var d=c[$];if(!(g===d&&!(g===void 0&&e.hasAttribute($)))){c[$]=g;var N=$[0]+$[1];if(N!=="$$")if(N==="on"){const S={},P="$$"+$;let A=$.slice(2);var m=Qr(A);if(Kr(A)&&(A=A.slice(0,-7),S.capture=!0),!m&&d){if(g!=null)continue;e.removeEventListener(A,c[P],S),c[P]=null}if(g!=null)if(m)e[`__${A}`]=g,Zr([A]);else{let se=function(fe){c[$].call(this,fe)};c[P]=Xr(A,e,se,S)}else m&&(e[`__${A}`]=void 0)}else if($==="style")G(e,$,g);else if($==="autofocus")rt(e,!!g);else if(!v&&($==="__value"||$==="value"&&g!=null))e.value=e.__value=g;else if($==="selected"&&p)$t(e,g);else{var b=$;o||(b=Jr(b));var I=b==="defaultValue"||b==="defaultChecked";if(g==null&&!v&&!I)if(l[$]=null,b==="value"||b==="checked"){let S=e;const P=r===void 0;if(b==="value"){let A=S.defaultValue;S.removeAttribute(b),S.defaultValue=A,S.value=S.__value=P?A:null}else{let A=S.defaultChecked;S.removeAttribute(b),S.defaultChecked=A,S.checked=P?A:!1}}else e.removeAttribute($);else I||E.includes(b)&&(v||typeof g!="string")?(e[b]=g,b in l&&(l[b]=Cr)):typeof g!="function"&&G(e,b,g)}}}return h&&O(!0),c}function De(e,r,t=[],i=[],n=[],a,s=!1,f=!1){Ir(n,t,i,l=>{var v=void 0,o={},h=e.nodeName===mt,c=!1;if(Xe(()=>{var _=r(...l.map(T)),E=wt(e,v,_,a,s,f);c&&h&&"value"in _&&$e(e,_.value);for(let d of Object.getOwnPropertySymbols(o))_[d]||F(o[d]);for(let d of Object.getOwnPropertySymbols(_)){var u=_[d];d.description===Pr&&(!v||u!==v[d])&&(o[d]&&F(o[d]),o[d]=Y(()=>ot(e,()=>u))),E[d]=u}v=E}),h){var p=e;Ze(()=>{$e(p,v.value,!0),pt(p)})}c=!0})}function fr(e){return e.__attributes??={[ar]:e.nodeName.includes("-"),[sr]:e.namespaceURI===xr}}var ze=new Map;function lr(e){var r=e.getAttribute("is")||e.nodeName,t=ze.get(r);if(t)return t;ze.set(r,t=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=yr(n);for(var s in i)i[s].set&&t.push(s);n=Mr(n)}return t}let te=!1;function Et(e){var r=te;try{return te=!1,[e(),te]}finally{te=r}}const Nt={get(e,r){if(!e.exclude.includes(r))return T(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){if(!(r in e.special)){var i=ne;try{Me(e.parent_effect),e.special[r]=H({get[r](){return e.props[r]}},r,Je)}finally{Me(i)}}return e.special[r](t),xe(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),xe(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function R(e,r){return new Proxy({props:e,exclude:r,special:{},version:pe(0),parent_effect:ne},Nt)}const St={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(X(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let n=e.props[i];X(n)&&(n=n());const a=_e(n,r);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(X(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=_e(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===Qe||r===er)return!1;for(let t of e.props)if(X(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props)if(X(t)&&(t=t()),!!t){for(const i in t)r.includes(i)||r.push(i);for(const i of Object.getOwnPropertySymbols(t))r.includes(i)||r.push(i)}return r}};function W(...e){return new Proxy({props:e},St)}function H(e,r,t,i){var n=!Fr||(t&Ur)!==0,a=(t&Hr)!==0,s=(t&Vr)!==0,f=i,l=!0,v=()=>(l&&(l=!1,f=s?ge(i):i),f),o;if(a){var h=Qe in e||er in e;o=_e(e,r)?.set??(h&&r in e?m=>e[r]=m:void 0)}var c,p=!1;a?[c,p]=Et(()=>e[r]):c=e[r],c===void 0&&i!==void 0&&(c=v(),o&&(n&&Lr(),o(c)));var _;if(n?_=()=>{var m=e[r];return m===void 0?v():(l=!0,m)}:_=()=>{var m=e[r];return m!==void 0&&(f=void 0),m===void 0?f:m},n&&(t&Je)===0)return _;if(o){var E=e.$$legacy;return(function(m,b){return arguments.length>0?((!n||!b||E||p)&&o(b?_():m),m):_()})}var u=!1,d=((t&Yr)!==0?Br:qe)(()=>(u=!1,_()));a&&T(d);var N=ne;return(function(m,b){if(arguments.length>0){const I=b?T(d):n&&a?kr(m):m;return Rr(d,I),u=!0,f!==void 0&&(f=I),m}return Dr&&u||(N.f&zr)!==0?d.v:T(d)})}/**
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
 */const Tt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const It=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};/**
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
 */const He=(...e)=>e.filter((r,t,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===t).join(" ").trim();var Pt=et("<svg><!><!></svg>");function K(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]),i=R(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);rr(r,!1);let n=H(r,"name",8,void 0),a=H(r,"color",8,"currentColor"),s=H(r,"size",8,24),f=H(r,"strokeWidth",8,2),l=H(r,"absoluteStrokeWidth",8,!1),v=H(r,"iconNode",24,()=>[]);Ue();var o=Pt();De(o,(p,_,E)=>({...Tt,...p,...i,width:s(),height:s(),stroke:a(),"stroke-width":_,class:E}),[()=>It(i)?void 0:{"aria-hidden":"true"},()=>(V(l()),V(f()),V(s()),ge(()=>l()?Number(f())*24/Number(s()):f())),()=>(V(He),V(n()),V(t),ge(()=>He("lucide-icon","lucide",n()?`lucide-${n()}`:"",t.class)))]);var h=L(o);Ae(h,1,v,be,(p,_)=>{var E=jr(()=>qr(T(_),2));let u=()=>T(E)[0],d=()=>T(E)[1];var N=z(),m=D(N);lt(m,u,!0,(b,I)=>{De(b,()=>({...d()}))}),C(p,N)});var c=ee(h);B(c,r,"default",{}),x(o),C(e,o),tr()}function Ct(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];K(e,W({name:"brush"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function xt(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];K(e,W({name:"code"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Mt(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"6",cy:"14",r:"3"}]];K(e,W({name:"file-badge"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Ot(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M8 14a2 2 0 0 0 2-2V8H8"}]];K(e,W({name:"message-square-quote"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function yt(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];K(e,W({name:"search"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Lt(e,r){const t=R(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];K(e,W({name:"user-round"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=z(),f=D(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}const Fe=[{name:"Profile",icon:Lt,link:"/"},{name:"Research",icon:yt,link:"https://research.mf-chan.com"},{name:"Design",icon:Ct,link:"https://design.mf-chan.com"},{name:"Code",icon:xt,link:"https://code.mf-chan.com"},{name:"Mentor",icon:Ot,link:"https://mentor.mf-chan.com"},{name:"Certificate",icon:Mt,link:"https://certificate.mf-chan.com"}];var kt=Ie('<li><a target="_blank" class="inline-block px-4 py-2"><!> </a></li>'),Rt=Ie('<a target="_blank" class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"> </a>'),Dt=Ie(`<main class="max-w-[90%] sm:max-w-[700px] lg:max-w-[800px]"><ul class="hidden lg:flex justify-start items-end gap-[3px] m-0 p-0 text-sm h-[50px]"></ul> <div class="p-3 bg-white rounded-xl lg:rounded-tl-none shadow-lg"><div class="flex flex-col lg:flex-row"><div class="mx-auto lg:ms-3 lg:me-0 my-3 lg:my-0 px-3 lg:py-3 w-1/4 lg:w-1/5 min-w-[120px]"><div class="max-w-[200px]"><img src="/og.png" alt="Profile picture" class="rounded-full" title="Hai!"/></div></div> <div class="px-3 md:px-12 lg:px-3 text-center lg:text-left lg:w-3/4"><h1 class="mb-1 lg:mt-3 lg:mb-1 text-3xl">Faizal <abbr class="cursor-help" title="Chaniago">Chan.</abbr></h1> <p class="mt-1 mb-3 text-gray-400">@moefc32</p> <p class="mb-3 lg:mb-6">Strong design management professional with a master of
                    management degree from Telkom University. Need mentoring
                    about UX Engineering or other topics? Feel free to <a href="mailto:hai@mf-chan.com" class="text-blue-500 hover:text-green-500 underline">contact me</a>!</p></div> <div class="flex flex-col gap-1 lg:hidden my-6 px-3"></div></div> <div class="mb-3 text-gray-500 text-center lg:text-sm"> </div></div></main>`);function Ut(e,r){rr(r,!1);const t=new Date().getFullYear(),i=(t>2018?"2018 - ":"")+t;Ue();var n=Dt(),a=L(n);Ae(a,5,()=>Fe,be,(h,c,p)=>{var _=kt();nr(_,1,"block pb-1 cursor-pointer rounded-t-lg h-[36px] "+(p===0?"bg-white":"bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px]"));var E=L(_),u=L(E);ft(u,()=>T(c).icon,(N,m)=>{m(N,{size:16,class:"inline-block me-1"})});var d=ee(u);x(E),x(_),oe(()=>{G(E,"href",T(c).link),ue(d,` ${T(c).name??""}`)}),C(h,_)}),x(a);var s=ee(a,2),f=L(s),l=ee(L(f),4);Ae(l,5,()=>Fe,be,(h,c,p)=>{var _=z(),E=D(_);{var u=d=>{var N=Rt(),m=L(N,!0);x(N),oe(()=>{G(N,"href",T(c).link),ue(m,T(c).name)}),C(d,N)};it(E,d=>{p!==0&&d(u)})}C(h,_)}),x(l),x(f);var v=ee(f,2),o=L(v);x(v),x(s),x(n),oe(()=>ue(o,`Mfc © ${i}`)),C(e,n),tr()}export{Ut as default};
