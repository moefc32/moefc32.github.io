var Pn=Array.isArray,$t=Array.prototype.indexOf,bn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Ln=Array.prototype,Zt=Object.getPrototypeOf;function qn(t){return typeof t=="function"}const Yn=()=>{};function Hn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,J=8,ot=16,D=32,P=64,V=128,E=256,G=512,d=1024,S=2048,b=4096,C=8192,Q=16384,zt=32768,gt=65536,jn=1<<17,Wt=1<<19,Tt=1<<20,vt=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function mt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!Xt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function $n(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Zn(){tt=!0}const zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,rr=4,er=8,ar=16,lr=1,sr=2,an="[",ln="[!",sn="]",xt={},ur=Symbol(),or="http://www.w3.org/1999/xhtml",fr="http://www.w3.org/2000/svg";function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function ir(t,n=!1,r){var e=i={p:i,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)}),dn(()=>{e.d=!0})}function _r(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Pt(a.fn)}}finally{z(r),Z(e)}}i=n.p,n.m=!0}return{}}function nt(){return!tt||i!==null&&i.l===null}const L=new Map;function ft(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function cr(t){return un(ft(t))}function vr(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function un(t){return u!==null&&!w&&u.f&y&&(m===null?An([t]):m.push(t)),t}function on(t,n){return u!==null&&!w&&nt()&&u.f&(y|ot)&&(m===null||!m.includes(t))&&en(),fn(t,n)}function fn(t,n){if(!t.equals(n)){var r=t.v;H?L.set(t,n):L.set(t,r),t.v=n,t.wv=jt(),Rt(t,S),nt()&&o!==null&&o.f&d&&!(o.f&(D|P))&&(x===null?xn([t]):x.push(t))}return n}function pr(t,n=1){var r=Gt(t),e=n===1?r++:r--;return on(t,r),e}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],f=s.f;f&S||!e&&s===o||(A(s,n),f&(d|E)&&(f&y?Rt(s,b):et(s)))}}let O=!1;function hr(t){O=t}let g;function q(t){if(t===null)throw Dt(),xt;return g=t}function dr(){return q(N(g))}function Er(t){if(O){if(N(g)!==null)throw Dt(),xt;g=t}}function wr(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function yr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===an||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,_n,cn,St,It;function gr(){if(ht===void 0){ht=window,_n=document,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,It=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function lt(t){return St.call(t)}function N(t){return It.call(t)}function Tr(t,n){if(!O)return lt(t);var r=lt(g);if(r===null)r=g.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),q(e),e}return q(r),r}function mr(t,n){if(!O){var r=lt(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Ar(t,n=1,r=!1){let e=O?g:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=at();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function xr(t){t.textContent=""}function Ot(t){var n=y|S,r=u!==null&&u.f&y?u:null;return o===null||r!==null&&r.f&E?n|=E:o.f|=Tt,{ctx:i,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function Dr(t){const n=Ot(t);return n.equals=At,n}function kt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)k(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function pn(t){var n,r=o;z(vn(t));try{kt(t),n=Ut(t)}finally{z(r)}return n}function Nt(t){var n=pn(t),r=(R||t.f&E)&&t.deps!==null?b:d;A(t,r),t.equals(n)||(t.v=n,t.wv=jt())}function Ct(t){o===null&&u===null&&tn(),u!==null&&u.f&E&&o===null&&Qt(),H&&Jt()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=o,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(a),a.f|=zt}catch(_){throw k(a),_}else n!==null&&et(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|V))===0;if(!s&&e&&(l!==null&&hn(a,l),u!==null&&u.f&y)){var f=u;(f.effects??(f.effects=[])).push(a)}return a}function dn(t){const n=F(J,null,!1);return A(n,d),n.teardown=t,n}function Rr(t){Ct();var n=o!==null&&(o.f&D)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Sr(t){return Ct(),En(t)}function Ir(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function En(t){return F(J,t,!0)}function Or(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Gt)))}function wn(t,n=0){return F(J|ot|n,t,!0)}function kr(t,n=!0){return F(J|D,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=H,e=u;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;r.f&P?r.parent=null:k(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),X(t,0),A(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Lt(t,r,!0),Tn(r,()=>{k(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&D)!==0;Lt(e,n,a?r:!1),e=l}}}function Nr(t){qt(t,!0)}function qt(t,n){if(t.f&C){t.f^=C,t.f&d||(t.f^=d),j(t)&&(A(t,S),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&D)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let Y=[],st=[];function Yt(){var t=Y;Y=[],wt(t)}function mn(){var t=st;st=[],wt(t)}function Cr(t){Y.length===0&&queueMicrotask(Yt),Y.push(t)}function dt(){Y.length>0&&Yt(),st.length>0&&mn()}let U=!1,$=!1,K=null,I=!1,H=!1;function Et(t){H=t}let M=[];let u=null,w=!1;function Z(t){u=t}let o=null;function z(t){o=t}let m=null;function An(t){m=t}let c=null,h=0,x=null;function xn(t){x=t}let Ht=1,W=0,R=!1;function jt(){return++Ht}function j(t){var v;var n=t.f;if(n&S)return!0;if(n&b){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&G)!==0,f=e&&o!==null&&!R,_=r.length;if(s||f){var T=t,B=T.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(T)))&&(a.reactions??(a.reactions=[])).push(T);s&&(T.f^=G),f&&B!==null&&!(B.f&E)&&(T.f^=E)}for(l=0;l<_;l++)if(a=r[l],j(a)&&Nt(a),a.wv>t.wv)return!0}(!e||o!==null&&!R)&&A(t,d)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&V)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function Rn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),Rn(n))throw t;return}r!==null&&(U=!0);{Dn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&y?Bt(a,n,!1):n===a&&(r?A(a,S):a.f&d&&A(a,b),et(a))}}function Ut(t){var _t;var n=c,r=h,e=x,l=u,a=R,s=m,f=i,_=w,T=t.f;c=null,h=0,x=null,R=(T&E)!==0&&(w||!I||u===null),u=T&(D|P)?null:t,m=null,pt(t.ctx),w=!1,W++;try{var B=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(X(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(X(t,h),v.length=h);if(nt()&&x!==null&&!w&&v!==null&&!(t.f&(y|b|S)))for(p=0;p<x.length;p++)Bt(x[p],t);return l!==null&&W++,B}finally{c=n,h=r,x=e,u=l,R=a,m=s,pt(f),w=_}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(c===null||!c.includes(n))&&(A(n,b),n.f&(E|G)||(n.f^=G),kt(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function it(t){var n=t.f;if(!(n&Q)){A(t,d);var r=o,e=i,l=I;o=t,I=!0;try{n&ot?yn(t):Ft(t),bt(t);var a=Ut(t);t.teardown=typeof a=="function"?a:null,t.wv=Ht;var s=t.deps,f}catch(_){rt(_,t,r,e||t.ctx)}finally{I=l,o=r}}}function In(){try{nn()}catch(t){if(K!==null)rt(t,K,null);else throw t}}function Vt(){var t=I;try{var n=0;for(I=!0;M.length>0;){n++>1e3&&In();var r=M,e=r.length;M=[];for(var l=0;l<e;l++){var a=kn(r[l]);On(a)}}}finally{$=!1,I=t,K=null,L.clear()}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Q|C)))try{j(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function et(t){$||($=!0,queueMicrotask(Vt));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(P|D)){if(!(r&d))return;n.f^=d}}M.push(n)}function kn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(D|P))!==0,a=l&&(e&d)!==0;if(!a&&!(e&C)){if(e&yt)n.push(r);else if(l)r.f^=d;else{var s=u;try{u=r,j(r)&&it(r)}catch(T){rt(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Nn(t){var n;for(dt();M.length>0;)$=!0,Vt(),dt();return n}async function Pr(){await Promise.resolve(),Nn()}function Gt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&rn();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&!(a.f&E)&&(l.f^=E)}return r&&(l=t,j(l)&&Nt(l)),H&&L.has(t)?L.get(t):t.v}function br(t){var n=w;try{return w=!0,t()}finally{w=n}}const Cn=-7169;function A(t,n){t.f=t.f&Cn|n}function Fr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{_n as $,Gt as A,Hn as B,Fr as C,Ot as D,Zn as E,mr as F,Ar as G,an as H,wr as I,Or as J,Tr as K,Er as L,Mn as M,Ln as N,ft as O,Kn as P,on as Q,ct as R,vt as S,$n as T,ur as U,Zt as V,Pn as W,wn as X,gt as Y,ln as Z,yr as _,N as a,Nr as a0,gn as a1,Gn as a2,jn as a3,Dr as a4,rr as a5,At as a6,vr as a7,er as a8,Bn as a9,Tn as aA,k as aB,zn as aC,Qn as aD,Xn as aE,Jn as aF,fr as aG,Yn as aH,Xt as aI,nr as aa,tr as ab,ar as ac,pr as ad,qn as ae,Pt as af,En as ag,Cr as ah,Nn as ai,Fn as aj,cr as ak,Pr as al,or as am,Un as an,Kt as ao,Z as ap,z as aq,u as ar,Wt as as,cn as at,lr as au,sr as av,C as aw,fn as ax,Wn as ay,Lt as az,xt as b,q as c,g as d,sn as e,Dt as f,lt as g,dr as h,gr as i,Vn as j,xr as k,bn as l,Ir as m,at as n,kr as o,ir as p,i as q,O as r,hr as s,o as t,_r as u,Rr as v,tt as w,br as x,Sr as y,wt as z};
