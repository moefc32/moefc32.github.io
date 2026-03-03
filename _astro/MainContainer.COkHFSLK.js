import{i as Ue}from"./lifecycle.Bcgz5G1o.js";import{q as $e,r as we,d as U,p as Ee,s as Ye,c as j,b as Y,a as Be,h as w,e as O,m as ur,f as q,g as ne,E as Ne,i as Se,H as Ve,j as je,k as ie,l as R,n as x,o as qe,t as T,C as cr,u as dr,v as Ce,w as y,x as vr,y as Ge,z as We,A as Te,B as hr,D as pr,F as _r,G as he,I as gr,J as oe,K as mr,L as br,M as Ar,N as Ke,O as $r,P as wr,Q as Er,R as Nr,S as ae,T as Xe,U as Ze,V as Je,W as Sr,X as Tr,Y as Ir,Z as Pr,_ as se,$ as Cr,a0 as xr,a1 as Mr,a2 as Or,a3 as yr,a4 as pe,a5 as kr,a6 as Qe,a7 as Lr,a8 as Rr,a9 as Dr,aa as zr,ab as xe,ac as Me,ad as Hr,ae as _e,af as Fr,ag as Ur,ah as Yr,ai as Br,aj as X,ak as er,al as rr,am as Vr,an as tr,ao as L,ap as z,aq as ee,ar as M,as as ir,at as V,au as jr,av as qr,aw as ue}from"./runtime.D5T1cDEP.js";import{a as Gr,i as Wr,b as Kr,d as Xr,c as Zr,e as Jr,n as Qr,f as et,g as H,h as C,j as rt,k as Ie,s as ce}from"./render.FyeeoWqx.js";function tt(e,r){if(r){const t=document.body;e.autofocus=!0,$e(()=>{document.activeElement===t&&e.focus()})}}let Oe=!1;function it(){Oe||(Oe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const r of e.target.elements)r.__on_r?.()})},{capture:!0}))}class Pe{anchor;#r=new Map;#t=new Map;#e=new Map;#i=new Set;#n=!0;constructor(r,t=!0){this.anchor=r,this.#n=t}#a=r=>{if(this.#r.has(r)){var t=this.#r.get(r),i=this.#t.get(t);if(i)we(i),this.#i.delete(t);else{var n=this.#e.get(t);n&&(this.#t.set(t,n.effect),this.#e.delete(t),n.fragment.lastChild.remove(),this.anchor.before(n.fragment),i=n.effect)}for(const[a,s]of this.#r){if(this.#r.delete(a),a===r)break;const f=this.#e.get(s);f&&(U(f.effect),this.#e.delete(s))}for(const[a,s]of this.#t){if(a===t||this.#i.has(a))continue;const f=()=>{if(Array.from(this.#r.values()).includes(a)){var d=document.createDocumentFragment();ur(s,d),d.append(j()),this.#e.set(a,{effect:s,fragment:d})}else U(s);this.#i.delete(a),this.#t.delete(a)};this.#n||!i?(this.#i.add(a),Ee(s,f,!1)):f()}}};#s=r=>{this.#r.delete(r);const t=Array.from(this.#r.values());for(const[i,n]of this.#e)t.includes(i)||(U(n.effect),this.#e.delete(i))};ensure(r,t){var i=Be,n=Ye();if(t&&!this.#t.has(r)&&!this.#e.has(r))if(n){var a=document.createDocumentFragment(),s=j();a.append(s),this.#e.set(r,{effect:Y(()=>t(s)),fragment:a})}else this.#t.set(r,Y(()=>t(this.anchor)));if(this.#r.set(i,r),n){for(const[f,l]of this.#t)f===r?i.unskip_effect(l):i.skip_effect(l);for(const[f,l]of this.#e)f===r?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(this.#a),i.ondiscard(this.#s)}else w&&(this.anchor=O),this.#a(i)}}function nt(e,r,t=!1){var i;w&&(i=O,q());var n=new Pe(e),a=t?Ne:0;function s(f,l){if(w){var d=Se(i),o;if(d===Ve?o=0:d===je?o=!1:o=parseInt(d.substring(1)),f!==o){var h=ie();R(h),n.anchor=h,x(!1),n.ensure(f,l),x(!0);return}}n.ensure(f,l)}ne(()=>{var f=!1;r((l,d=0)=>{f=!0,s(d,l)}),f||s(!1,null)},a)}function ge(e,r){return r}function at(e,r,t){for(var i=[],n=r.length,a,s=r.length,f=0;f<n;f++){let h=r[f];Ee(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var c=e.outrogroups;me(Te(a.done)),c.delete(a),c.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=i.length===0&&t!==null;if(l){var d=t,o=d.parentNode;br(o),o.append(d),e.items.clear()}me(r,!l)}else a={pending:new Set(r),done:new Set},(e.outrogroups??=new Set).add(a)}function me(e,r=!0){for(var t=0;t<e.length;t++)U(e[t],r)}var ye;function be(e,r,t,i,n,a=null){var s=e,f=new Map,l=(r&Ke)!==0;if(l){var d=e;s=w?R(qe(d)):d.appendChild(j())}w&&q();var o=null,h=Ge(()=>{var v=t();return We(v)?v:v==null?[]:Te(v)}),c,p=!0;function _(){u.fallback=o,st(u,c,s,r,i),o!==null&&(c.length===0?(o.f&y)===0?we(o):(o.f^=y,re(o,null,s)):Ee(o,()=>{o=null}))}var E=ne(()=>{c=T(h);var v=c.length;let N=!1;if(w){var b=Se(s)===je;b!==(v===0)&&(s=ie(),R(s),x(!1),N=!0)}for(var m=new Set,I=Be,A=Ye(),g=0;g<v;g+=1){w&&O.nodeType===cr&&O.data===dr&&(s=O,N=!0,x(!1));var S=c[g],P=i(S,g),$=p?null:f.get(P);$?($.v&&Ce($.v,S),$.i&&Ce($.i,g),A&&I.unskip_effect($.e)):($=ft(f,p?s:ye??=j(),S,P,g,n,r,t),p||($.e.f|=y),f.set(P,$)),m.add(P)}if(v===0&&a&&!o&&(p?o=Y(()=>a(s)):(o=Y(()=>a(ye??=j())),o.f|=y)),v>m.size&&vr(),w&&v>0&&R(ie()),!p)if(A){for(const[fe,le]of f)m.has(fe)||I.skip_effect(le.e);I.oncommit(_),I.ondiscard(()=>{})}else _();N&&x(!0),T(h)}),u={effect:E,items:f,outrogroups:null,fallback:o};p=!1,w&&(s=O)}function Z(e){for(;e!==null&&(e.f&mr)===0;)e=e.next;return e}function st(e,r,t,i,n){var a=(i&$r)!==0,s=r.length,f=e.items,l=Z(e.effect.first),d,o=null,h,c=[],p=[],_,E,u,v;if(a)for(v=0;v<s;v+=1)_=r[v],E=n(_,v),u=f.get(E).e,(u.f&y)===0&&(u.nodes?.a?.measure(),(h??=new Set).add(u));for(v=0;v<s;v+=1){if(_=r[v],E=n(_,v),u=f.get(E).e,e.outrogroups!==null)for(const $ of e.outrogroups)$.pending.delete(u),$.done.delete(u);if((u.f&y)!==0)if(u.f^=y,u===l)re(u,null,t);else{var N=o?o.next:l;u===e.effect.last&&(e.effect.last=u.prev),u.prev&&(u.prev.next=u.next),u.next&&(u.next.prev=u.prev),k(e,o,u),k(e,u,N),re(u,N,t),o=u,c=[],p=[],l=Z(o.next);continue}if((u.f&oe)!==0&&(we(u),a&&(u.nodes?.a?.unfix(),(h??=new Set).delete(u))),u!==l){if(d!==void 0&&d.has(u)){if(c.length<p.length){var b=p[0],m;o=b.prev;var I=c[0],A=c[c.length-1];for(m=0;m<c.length;m+=1)re(c[m],b,t);for(m=0;m<p.length;m+=1)d.delete(p[m]);k(e,I.prev,A.next),k(e,o,I),k(e,A,b),l=b,o=A,v-=1,c=[],p=[]}else d.delete(u),re(u,l,t),k(e,u.prev,u.next),k(e,u,o===null?e.effect.first:o.next),k(e,o,u),o=u;continue}for(c=[],p=[];l!==null&&l!==u;)(d??=new Set).add(l),p.push(l),l=Z(l.next);if(l===null)continue}(u.f&y)===0&&c.push(u),o=u,l=Z(u.next)}if(e.outrogroups!==null){for(const $ of e.outrogroups)$.pending.size===0&&(me(Te($.done)),e.outrogroups?.delete($));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||d!==void 0){var g=[];if(d!==void 0)for(u of d)(u.f&oe)===0&&g.push(u);for(;l!==null;)(l.f&oe)===0&&l!==e.fallback&&g.push(l),l=Z(l.next);var S=g.length;if(S>0){var P=(i&Ke)!==0&&s===0?t:null;if(a){for(v=0;v<S;v+=1)g[v].nodes?.a?.measure();for(v=0;v<S;v+=1)g[v].nodes?.a?.fix()}at(e,g,P)}}a&&$e(()=>{if(h!==void 0)for(u of h)u.nodes?.a?.apply()})}function ft(e,r,t,i,n,a,s,f){var l=(s&hr)!==0?(s&pr)===0?_r(t,!1,!1):he(t):null,d=(s&gr)!==0?he(n):null;return{v:l,i:d,e:Y(()=>(a(r,l??t,d??n,f),()=>{e.delete(i)}))}}function re(e,r,t){if(e.nodes)for(var i=e.nodes.start,n=e.nodes.end,a=r&&(r.f&y)===0?r.nodes.start:t;i!==null;){var s=Ar(i);if(a.before(i),i===n)return;i=s}}function k(e,r,t){r===null?e.effect.first=t:r.next=t,t===null?e.effect.last=r:t.prev=r}function B(e,r,t,i,n){w&&q();var a=r.$$slots?.[t],s=!1;a===!0&&(a=r.children,s=!0),a===void 0||a(e,s?()=>i:i)}function lt(e,r,t){var i;w&&(i=O,q());var n=new Pe(e);ne(()=>{var a=r()??null;if(w){var s=Se(i),f=s===Ve,l=a!==null;if(f!==l){var d=ie();R(d),n.anchor=d,x(!1),n.ensure(a,a&&(o=>t(o,a))),x(!0);return}}n.ensure(a,a&&(o=>t(o,a)))},Ne)}function ot(e,r,t,i,n,a){let s=w;w&&q();var f=null;w&&O.nodeType===wr&&(f=O,q());var l=w?O:e,d=new Pe(l,!1);ne(()=>{const o=r()||null;var h=Nr;if(o===null){d.ensure(null,null);return}return d.ensure(o,c=>{if(o){if(f=w?f:Er(o,h),Gr(f,f),i){w&&Wr(o)&&f.append(document.createComment(""));var p=w?qe(f):f.appendChild(j());w&&(p===null?x(!1):R(p)),i(f,p)}ae.nodes.end=f,c.before(f)}w&&R(c)}),()=>{}},Ne),Xe(()=>{}),s&&(x(!0),R(l))}function ut(e,r){var t=void 0,i;Ze(()=>{t!==(t=r())&&(i&&(U(i),i=null),t&&(i=Y(()=>{Je(()=>t(e))})))})}function nr(e){var r,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=nr(e[r]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function ct(){for(var e,r,t=0,i="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=nr(e))&&(i&&(i+=" "),i+=r);return i}function dt(e){return typeof e=="object"?ct(e):e??""}const ke=[...` 	
\r\f \v\uFEFF`];function vt(e,r,t){var i=e==null?"":""+e;if(t){for(var n of Object.keys(t))if(t[n])i=i?i+" "+n:n;else if(i.length)for(var a=n.length,s=0;(s=i.indexOf(n,s))>=0;){var f=s+a;(s===0||ke.includes(i[s-1]))&&(f===i.length||ke.includes(i[f]))?i=(s===0?"":i.substring(0,s))+i.substring(f+1):s=f}}return i===""?null:i}function Le(e,r=!1){var t=r?" !important;":";",i="";for(var n of Object.keys(e)){var a=e[n];a!=null&&a!==""&&(i+=" "+n+": "+a+t)}return i}function de(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function ht(e,r){if(r){var t="",i,n;if(Array.isArray(r)?(i=r[0],n=r[1]):i=r,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,s=0,f=!1,l=[];i&&l.push(...Object.keys(i).map(de)),n&&l.push(...Object.keys(n).map(de));var d=0,o=-1;const E=e.length;for(var h=0;h<E;h++){var c=e[h];if(f?c==="/"&&e[h-1]==="*"&&(f=!1):a?a===c&&(a=!1):c==="/"&&e[h+1]==="*"?f=!0:c==='"'||c==="'"?a=c:c==="("?s++:c===")"&&s--,!f&&a===!1&&s===0){if(c===":"&&o===-1)o=h;else if(c===";"||h===E-1){if(o!==-1){var p=de(e.substring(d,o).trim());if(!l.includes(p)){c!==";"&&h++;var _=e.substring(d,h).trim();t+=" "+_+";"}}d=h+1,o=-1}}}}return i&&(t+=Le(i)),n&&(t+=Le(n,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function ar(e,r,t,i,n,a){var s=e.__className;if(w||s!==t||s===void 0){var f=vt(t,i,a);(!w||f!==e.getAttribute("class"))&&(f==null?e.removeAttribute("class"):r?e.className=f:e.setAttribute("class",f)),e.__className=t}else if(a&&n!==a)for(var l in a){var d=!!a[l];(n==null||d!==!!n[l])&&e.classList.toggle(l,d)}return a}function ve(e,r={},t,i){for(var n in t){var a=t[n];r[n]!==a&&(t[n]==null?e.style.removeProperty(n):e.style.setProperty(n,a,i))}}function pt(e,r,t,i){var n=e.__style;if(w||n!==r){var a=ht(r,i);(!w||a!==e.getAttribute("style"))&&(a==null?e.removeAttribute("style"):e.style.cssText=a),e.__style=r}else i&&(Array.isArray(i)?(ve(e,t?.[0],i[0]),ve(e,t?.[1],i[1],"important")):ve(e,t,i));return i}function Ae(e,r,t=!1){if(e.multiple){if(r==null)return;if(!We(r))return Sr();for(var i of e.options)i.selected=r.includes(Re(i));return}for(i of e.options){var n=Re(i);if(Tr(n,r)){i.selected=!0;return}}(!t||r!==void 0)&&(e.selectedIndex=-1)}function _t(e){var r=new MutationObserver(()=>{Ae(e,e.__value)});r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Xe(()=>{r.disconnect()})}function Re(e){return"__value"in e?e.__value:e.value}const J=Symbol("class"),Q=Symbol("style"),sr=Symbol("is custom element"),fr=Symbol("is html"),gt=se?"link":"LINK",mt=se?"input":"INPUT",bt=se?"option":"OPTION",At=se?"select":"SELECT";function $t(e){if(w){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var i=e.value;G(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var n=e.checked;G(e,"checked",null),e.checked=n}}};e.__on_r=t,$e(t),it()}}function wt(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function G(e,r,t,i){var n=lr(e);w&&(n[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName===gt)||n[r]!==(n[r]=t)&&(r==="loading"&&(e[Or]=t),t==null?e.removeAttribute(r):typeof t!="string"&&or(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function Et(e,r,t,i,n=!1,a=!1){if(w&&n&&e.nodeName===mt){var s=e,f=s.type==="checkbox"?"defaultChecked":"defaultValue";f in t||$t(s)}var l=lr(e),d=l[sr],o=!l[fr];let h=w&&d;h&&x(!1);var c=r||{},p=e.nodeName===bt;for(var _ in r)_ in t||(t[_]=null);t.class?t.class=dt(t.class):t[J]&&(t.class=null),t[Q]&&(t.style??=null);var E=or(e);for(const A in t){let g=t[A];if(p&&A==="value"&&g==null){e.value=e.__value="",c[A]=g;continue}if(A==="class"){var u=e.namespaceURI==="http://www.w3.org/1999/xhtml";ar(e,u,g,i,r?.[J],t[J]),c[A]=g,c[J]=t[J];continue}if(A==="style"){pt(e,g,r?.[Q],t[Q]),c[A]=g,c[Q]=t[Q];continue}var v=c[A];if(!(g===v&&!(g===void 0&&e.hasAttribute(A)))){c[A]=g;var N=A[0]+A[1];if(N!=="$$")if(N==="on"){const S={},P="$$"+A;let $=A.slice(2);var b=et($);if(Kr($)&&($=$.slice(0,-7),S.capture=!0),!b&&v){if(g!=null)continue;e.removeEventListener($,c[P],S),c[P]=null}if(b)Xr($,e,g),Zr([$]);else if(g!=null){let fe=function(le){c[A].call(this,le)};c[P]=Jr($,e,fe,S)}}else if(A==="style")G(e,A,g);else if(A==="autofocus")tt(e,!!g);else if(!d&&(A==="__value"||A==="value"&&g!=null))e.value=e.__value=g;else if(A==="selected"&&p)wt(e,g);else{var m=A;o||(m=Qr(m));var I=m==="defaultValue"||m==="defaultChecked";if(g==null&&!d&&!I)if(l[A]=null,m==="value"||m==="checked"){let S=e;const P=r===void 0;if(m==="value"){let $=S.defaultValue;S.removeAttribute(m),S.defaultValue=$,S.value=S.__value=P?$:null}else{let $=S.defaultChecked;S.removeAttribute(m),S.defaultChecked=$,S.checked=P?$:!1}}else e.removeAttribute(A);else I||E.includes(m)&&(d||typeof g!="string")?(e[m]=g,m in l&&(l[m]=Cr)):typeof g!="function"&&G(e,m,g)}}}return h&&x(!0),c}function De(e,r,t=[],i=[],n=[],a,s=!1,f=!1){Ir(n,t,i,l=>{var d=void 0,o={},h=e.nodeName===At,c=!1;if(Ze(()=>{var _=r(...l.map(T)),E=Et(e,d,_,a,s,f);c&&h&&"value"in _&&Ae(e,_.value);for(let v of Object.getOwnPropertySymbols(o))_[v]||U(o[v]);for(let v of Object.getOwnPropertySymbols(_)){var u=_[v];v.description===Pr&&(!d||u!==d[v])&&(o[v]&&U(o[v]),o[v]=Y(()=>ut(e,()=>u))),E[v]=u}d=E}),h){var p=e;Je(()=>{Ae(p,d.value,!0),_t(p)})}c=!0})}function lr(e){return e.__attributes??={[sr]:e.nodeName.includes("-"),[fr]:e.namespaceURI===xr}}var ze=new Map;function or(e){var r=e.getAttribute("is")||e.nodeName,t=ze.get(r);if(t)return t;ze.set(r,t=[]);for(var i,n=e,a=Element.prototype;a!==n;){i=yr(n);for(var s in i)i[s].set&&t.push(s);n=Mr(n)}return t}let te=!1;function Nt(e){var r=te;try{return te=!1,[e(),te]}finally{te=r}}const St={get(e,r){if(!e.exclude.includes(r))return T(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){if(!(r in e.special)){var i=ae;try{Me(e.parent_effect),e.special[r]=F({get[r](){return e.props[r]}},r,Qe)}finally{Me(i)}}return e.special[r](t),xe(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),xe(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function D(e,r){return new Proxy({props:e,exclude:r,special:{},version:he(0),parent_effect:ae},St)}const Tt={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(X(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let n=e.props[i];X(n)&&(n=n());const a=pe(n,r);if(a&&a.set)return a.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(X(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=pe(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===er||r===rr)return!1;for(let t of e.props)if(X(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props)if(X(t)&&(t=t()),!!t){for(const i in t)r.includes(i)||r.push(i);for(const i of Object.getOwnPropertySymbols(t))r.includes(i)||r.push(i)}return r}};function W(...e){return new Proxy({props:e},Tt)}function F(e,r,t,i){var n=!Fr||(t&Ur)!==0,a=(t&Hr)!==0,s=(t&Vr)!==0,f=i,l=!0,d=()=>(l&&(l=!1,f=s?_e(i):i),f),o;if(a){var h=er in e||rr in e;o=pe(e,r)?.set??(h&&r in e?b=>e[r]=b:void 0)}var c,p=!1;a?[c,p]=Nt(()=>e[r]):c=e[r],c===void 0&&i!==void 0&&(c=d(),o&&(n&&kr(),o(c)));var _;if(n?_=()=>{var b=e[r];return b===void 0?d():(l=!0,b)}:_=()=>{var b=e[r];return b!==void 0&&(f=void 0),b===void 0?f:b},n&&(t&Qe)===0)return _;if(o){var E=e.$$legacy;return(function(b,m){return arguments.length>0?((!n||!m||E||p)&&o(m?_():b),b):_()})}var u=!1,v=((t&Yr)!==0?Br:Ge)(()=>(u=!1,_()));a&&T(v);var N=ae;return(function(b,m){if(arguments.length>0){const I=m?T(v):n&&a?Lr(b):b;return Rr(v,I),u=!0,f!==void 0&&(f=I),b}return Dr&&u||(N.f&zr)!==0?v.v:T(v)})}/**
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
 */const He=(...e)=>e.filter((r,t,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===t).join(" ").trim();var Ct=rt("<svg><!><!></svg>");function K(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]),i=D(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);tr(r,!1);let n=F(r,"name",8,void 0),a=F(r,"color",8,"currentColor"),s=F(r,"size",8,24),f=F(r,"strokeWidth",8,2),l=F(r,"absoluteStrokeWidth",8,!1),d=F(r,"iconNode",24,()=>[]);Ue();var o=Ct();De(o,(p,_,E)=>({...It,...p,...i,width:s(),height:s(),stroke:a(),"stroke-width":_,class:E}),[()=>Pt(i)?void 0:{"aria-hidden":"true"},()=>(V(l()),V(f()),V(s()),_e(()=>l()?Number(f())*24/Number(s()):f())),()=>(V(He),V(n()),V(t),_e(()=>He("lucide-icon","lucide",n()?`lucide-${n()}`:"",t.class)))]);var h=L(o);be(h,1,d,ge,(p,_)=>{var E=jr(()=>qr(T(_),2));let u=()=>T(E)[0],v=()=>T(E)[1];var N=H(),b=z(N);ot(b,u,!0,(m,I)=>{De(m,()=>({...v()}))}),C(p,N)});var c=ee(h);B(c,r,"default",{}),M(o),C(e,o),ir()}function xt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m11 10 3 3"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"}]];K(e,W({name:"brush"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Mt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];K(e,W({name:"code"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Ot(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88"}],["circle",{cx:"6",cy:"14",r:"3"}]];K(e,W({name:"file-badge"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function yt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"M14 14a2 2 0 0 0 2-2V8h-2"}],["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M8 14a2 2 0 0 0 2-2V8H8"}]];K(e,W({name:"message-square-quote"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function kt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];K(e,W({name:"search"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}function Lt(e,r){const t=D(r,["children","$$slots","$$events","$$legacy"]);/**
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
 */const i=[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]];K(e,W({name:"user-round"},()=>t,{get iconNode(){return i},children:(n,a)=>{var s=H(),f=z(s);B(f,r,"default",{}),C(n,s)},$$slots:{default:!0}}))}const Fe=[{name:"Profile",icon:Lt,link:"/"},{name:"Research",icon:kt,link:"https://research.mf-chan.com"},{name:"Design",icon:xt,link:"https://design.mf-chan.com"},{name:"Code",icon:Mt,link:"https://code.mf-chan.com"},{name:"Mentor",icon:yt,link:"https://mentor.mf-chan.com"},{name:"Certificate",icon:Ot,link:"https://certificate.mf-chan.com"}];var Rt=Ie('<li><a target="_blank" class="inline-block px-4 py-2"><!> </a></li>'),Dt=Ie('<a target="_blank" class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"> </a>'),zt=Ie(`<main class="max-w-[90%] sm:max-w-[700px] lg:max-w-[800px]"><ul class="hidden lg:flex justify-start items-end gap-[3px] m-0 p-0 text-sm h-[50px]"></ul> <div class="p-3 bg-white rounded-xl lg:rounded-tl-none shadow-lg"><div class="flex flex-col lg:flex-row"><div class="mx-auto lg:ms-3 lg:me-0 my-3 lg:my-0 px-3 lg:py-3 w-1/4 lg:w-1/5 min-w-[120px]"><div class="max-w-[200px]"><img src="/og.png" alt="Profile picture" class="rounded-full" title="Hai!"/></div></div> <div class="px-3 md:px-12 lg:px-3 text-center lg:text-left lg:w-3/4"><h1 class="mb-1 lg:mt-3 lg:mb-1 text-3xl">Faizal <abbr class="cursor-help" title="Chaniago">Chan.</abbr></h1> <p class="mt-1 mb-3 text-gray-400">@moefc32</p> <p class="mb-3 lg:mb-6">Strong design management professional with a master of
                    management degree from Telkom University. Need mentoring
                    about UX Engineering or other topics? Feel free to <a href="mailto:hai@mf-chan.com" class="text-blue-500 hover:text-green-500 underline">contact me</a>!</p></div> <div class="flex flex-col gap-1 lg:hidden my-6 px-3"></div></div> <div class="mb-3 text-gray-500 text-center lg:text-sm"> </div></div></main>`);function Yt(e,r){tr(r,!1);const t=new Date().getFullYear(),i=(t>2018?"2018 - ":"")+t;Ue();var n=zt(),a=L(n);be(a,5,()=>Fe,ge,(h,c,p)=>{var _=Rt();ar(_,1,"block pb-1 cursor-pointer rounded-t-lg h-[36px] "+(p===0?"bg-white":"bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px]"));var E=L(_),u=L(E);lt(u,()=>T(c).icon,(N,b)=>{b(N,{size:16,class:"inline-block me-1"})});var v=ee(u);M(E),M(_),ue(()=>{G(E,"href",T(c).link),ce(v,` ${T(c).name??""}`)}),C(h,_)}),M(a);var s=ee(a,2),f=L(s),l=ee(L(f),4);be(l,5,()=>Fe,ge,(h,c,p)=>{var _=H(),E=z(_);{var u=v=>{var N=Dt(),b=L(N,!0);M(N),ue(()=>{G(N,"href",T(c).link),ce(b,T(c).name)}),C(v,N)};nt(E,v=>{p!==0&&v(u)})}C(h,_)}),M(l),M(f);var d=ee(f,2),o=L(d);M(d),M(s),M(n),ue(()=>ce(o,`Mfc © ${i}`)),C(e,n),ir()}export{Yt as default};
