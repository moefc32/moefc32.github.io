var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,Zn=Object.defineProperty,V=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,kt=Object.getPrototypeOf,Dt=Object.isExtensible;function zn(t){return typeof t=="function"}const Wn=()=>{};function Xn(t){return t()}function Pt(t){for(var e=0;e<t.length;e++)t[e]()}const x=2,Ct=4,ut=8,gt=16,S=32,B=64,nt=128,m=256,et=512,E=1024,O=2048,M=4096,j=8192,it=16384,vn=32768,Ft=65536,Jn=1<<17,hn=1<<19,Mt=1<<20,pt=1<<21,G=Symbol("$state"),Qn=Symbol("legacy props"),te=Symbol("");function Lt(t){return t===this.v}function pn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function qt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function En(t){throw new Error("https://svelte.dev/e/effect_orphan")}function yn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ne(){throw new Error("https://svelte.dev/e/hydration_failed")}function ee(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ot=!1;function re(){ot=!0}const ae=1,le=2,se=4,fe=8,ue=16,ie=1,oe=2,_e=4,ce=8,ve=16,he=1,pe=2,An="[",xn="[!",Rn="]",Yt={},y=Symbol(),de="http://www.w3.org/1999/xhtml",we="http://www.w3.org/2000/svg";let p=null;function bt(t){p=t}function Ee(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};ot&&!e&&(p.l={s:null,u:null,r1:[],r2:Tt(!1)}),Nn(()=>{r.d=!0})}function ye(t){const e=p;if(e!==null){const i=e.e;if(i!==null){var n=h,r=v;e.e=null;try{for(var a=0;a<i.length;a++){var l=i[a];lt(l.effect),H(l.reaction),Zt(l.fn)}}finally{lt(n),H(r)}}p=e.p,e.m=!0}return{}}function _t(){return!ot||p!==null&&p.l===null}function q(t){if(typeof t!="object"||t===null||G in t)return t;const e=kt(t);if(e!==_n&&e!==cn)return t;var n=new Map,r=fn(t),a=N(0),l=v,i=u=>{var s=v;H(l);var f=u();return H(s),f};return r&&n.set("length",N(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var _=n.get(s);return _===void 0?(_=i(()=>N(f.value)),n.set(s,_)):I(_,i(()=>q(f.value))),!0},deleteProperty(u,s){var f=n.get(s);if(f===void 0)s in u&&n.set(s,i(()=>N(y)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&I(_,o)}I(f,y),It(a)}return!0},get(u,s,f){var A;if(s===G)return t;var _=n.get(s),o=s in u;if(_===void 0&&(!o||(A=V(u,s))!=null&&A.writable)&&(_=i(()=>N(q(o?u[s]:y))),n.set(s,_)),_!==void 0){var c=Y(_);return c===y?void 0:c}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=Y(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(u,s){var c;if(s===G)return!0;var f=n.get(s),_=f!==void 0&&f.v!==y||Reflect.has(u,s);if(f!==void 0||h!==null&&(!_||(c=V(u,s))!=null&&c.writable)){f===void 0&&(f=i(()=>N(_?q(u[s]):y)),n.set(s,f));var o=Y(f);if(o===y)return!1}return _},set(u,s,f,_){var Rt;var o=n.get(s),c=s in u;if(r&&s==="length")for(var A=f;A<o.v;A+=1){var J=n.get(A+"");J!==void 0?I(J,y):A in u&&(J=i(()=>N(y)),n.set(A+"",J))}o===void 0?(!c||(Rt=V(u,s))!=null&&Rt.writable)&&(o=i(()=>N(void 0)),I(o,i(()=>q(f))),n.set(s,o)):(c=o.v!==y,I(o,i(()=>q(f))));var Q=Reflect.getOwnPropertyDescriptor(u,s);if(Q!=null&&Q.set&&Q.set.call(_,f),!c){if(r&&typeof s=="string"){var xt=n.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=xt.v&&I(xt,ht+1)}It(a)}return!0},ownKeys(u){Y(a);var s=Reflect.ownKeys(u).filter(o=>{var c=n.get(o);return c===void 0||c.v!==y});for(var[f,_]of n)_.v!==y&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function It(t,e=1){I(t,t.v+e)}function mt(t){var e=x|O,n=v!==null&&(v.f&x)!==0?v:null;return h===null||n!==null&&(n.f&m)!==0?e|=m:h.f|=Mt,{ctx:p,deps:null,effects:null,equals:Lt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function ge(t){const e=mt(t);return nn(e),e}function me(t){const e=mt(t);return e.equals=qt,e}function jt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function Dn(t){for(var e=t.parent;e!==null;){if((e.f&x)===0)return e;e=e.parent}return null}function Ht(t){var e,n=h;lt(Dn(t));try{jt(t),e=ln(t)}finally{lt(n)}return e}function Bt(t){var e=Ht(t),n=(k||(t.f&m)!==0)&&t.deps!==null?M:E;D(t,n),t.equals(e)||(t.v=e,t.wv=rn())}const $=new Map;function Tt(t,e){var n={f:0,v:t,reactions:null,equals:Lt,rv:0,wv:0};return n}function N(t,e){const n=Tt(t);return nn(n),n}function Te(t,e=!1){var r;const n=Tt(t);return e||(n.equals=qt),ot&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function I(t,e,n=!1){v!==null&&!b&&_t()&&(v.f&(x|gt))!==0&&!(w!=null&&w.includes(t))&&Tn();let r=n?q(e):e;return bn(t,r)}function bn(t,e){if(!t.equals(e)){var n=t.v;W?$.set(t,e):$.set(t,n),t.v=e,(t.f&x)!==0&&((t.f&O)!==0&&Ht(t),D(t,(t.f&m)===0?E:M)),t.wv=rn(),Ut(t,O),_t()&&h!==null&&(h.f&E)!==0&&(h.f&(S|B))===0&&(T===null?qn([t]):T.push(t))}return e}function Ae(t,e=1){var n=Y(t),r=e===1?n++:n--;return I(t,n),r}function Ut(t,e){var n=t.reactions;if(n!==null)for(var r=_t(),a=n.length,l=0;l<a;l++){var i=n[l],u=i.f;(u&O)===0&&(!r&&i===h||(D(i,e),(u&(E|m))!==0&&((u&x)!==0?Ut(i,M):vt(i))))}}function Vt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let C=!1;function xe(t){C=t}let R;function Z(t){if(t===null)throw Vt(),Yt;return R=t}function Re(){return Z(L(R))}function De(t){if(C){if(L(R)!==null)throw Vt(),Yt;R=t}}function be(t=1){if(C){for(var e=t,n=R;e--;)n=L(n);R=n}}function Ie(){for(var t=0,e=R;;){if(e.nodeType===8){var n=e.data;if(n===Rn){if(t===0)return e;t-=1}else(n===An||n===xn)&&(t+=1)}var r=L(e);e.remove(),e=r}}var Ot,In,On,Gt,Kt;function Oe(){if(Ot===void 0){Ot=window,In=document,On=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Gt=V(e,"firstChild").get,Kt=V(e,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(n)&&(n.__t=void 0)}}function dt(t=""){return document.createTextNode(t)}function wt(t){return Gt.call(t)}function L(t){return Kt.call(t)}function Se(t,e){if(!C)return wt(t);var n=wt(R);if(n===null)n=R.appendChild(dt());else if(e&&n.nodeType!==3){var r=dt();return n==null||n.before(r),Z(r),r}return Z(n),n}function Ne(t,e){if(!C){var n=wt(t);return n instanceof Comment&&n.data===""?L(n):n}return R}function ke(t,e=1,n=!1){let r=C?R:t;for(var a;e--;)a=r,r=L(r);if(!C)return r;var l=r==null?void 0:r.nodeType;if(n&&l!==3){var i=dt();return r===null?a==null||a.after(i):r.before(i),Z(i),i}return Z(r),r}function Pe(t){t.textContent=""}function $t(t){h===null&&v===null&&En(),v!==null&&(v.f&m)!==0&&h===null&&wn(),W&&dn()}function Sn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function U(t,e,n,r=!0){var a=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{At(l),l.f|=vn}catch(s){throw F(l),s}else e!==null&&vt(l);var i=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Mt|nt))===0;if(!i&&r&&(a!==null&&Sn(l,a),v!==null&&(v.f&x)!==0)){var u=v;(u.effects??(u.effects=[])).push(l)}return l}function Nn(t){const e=U(ut,null,!1);return D(e,E),e.teardown=t,e}function Ce(t){$t();var e=h!==null&&(h.f&S)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Zt(t);return r}}function Fe(t){return $t(),kn(t)}function Me(t){const e=U(B,t,!0);return(n={})=>new Promise(r=>{n.outro?Fn(e,()=>{F(e),r(void 0)}):(F(e),r(void 0))})}function Zt(t){return U(Ct,t,!1)}function kn(t){return U(ut,t,!0)}function Le(t,e=[],n=mt){const r=e.map(n);return Pn(()=>t(...r.map(Y)))}function Pn(t,e=0){return U(ut|gt|e,t,!0)}function qe(t,e=!0){return U(ut|S,t,!0,e)}function zt(t){var e=t.teardown;if(e!==null){const n=W,r=v;Nt(!0),H(null);try{e.call(null)}finally{Nt(n),H(r)}}}function Wt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&B)!==0?n.parent=null:F(n,e),n=r}}function Cn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&S)===0&&F(e),e=n}}function F(t,e=!0){var n=!1;if((e||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:L(r);r.remove(),r=l}n=!0}Wt(t,e&&!n),ft(t,0),D(t,it);var i=t.transitions;if(i!==null)for(const s of i)s.stop();zt(t);var u=t.parent;u!==null&&u.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Fn(t,e){var n=[];Jt(t,n,!0),Mn(n,()=>{F(t),e&&e()})}function Mn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Jt(t,e,n){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const i of t.transitions)(i.is_global||n)&&e.push(i);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Ft)!==0||(r.f&S)!==0;Jt(r,e,l?n:!1),r=a}}}function Ye(t){Qt(t,!0)}function Qt(t,e){if((t.f&j)!==0){t.f^=j,(t.f&E)===0&&(t.f^=E),X(t)&&(D(t,O),vt(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Ft)!==0||(n.f&S)!==0;Qt(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let z=[],Et=[];function tn(){var t=z;z=[],Pt(t)}function Ln(){var t=Et;Et=[],Pt(t)}function je(t){z.length===0&&queueMicrotask(tn),z.push(t)}function St(){z.length>0&&tn(),Et.length>0&&Ln()}let tt=!1,rt=!1,at=null,P=!1,W=!1;function Nt(t){W=t}let K=[];let v=null,b=!1;function H(t){v=t}let h=null;function lt(t){h=t}let w=null;function nn(t){v!==null&&v.f&pt&&(w===null?w=[t]:w.push(t))}let d=null,g=0,T=null;function qn(t){T=t}let en=1,st=0,k=!1;function rn(){return++en}function X(t){var o;var e=t.f;if((e&O)!==0)return!0;if((e&M)!==0){var n=t.deps,r=(e&m)!==0;if(n!==null){var a,l,i=(e&et)!==0,u=r&&h!==null&&!k,s=n.length;if(i||u){var f=t,_=f.parent;for(a=0;a<s;a++)l=n[a],(i||!((o=l==null?void 0:l.reactions)!=null&&o.includes(f)))&&(l.reactions??(l.reactions=[])).push(f);i&&(f.f^=et),u&&_!==null&&(_.f&m)===0&&(f.f^=m)}for(a=0;a<s;a++)if(l=n[a],X(l)&&Bt(l),l.wv>t.wv)return!0}(!r||h!==null&&!k)&&D(t,E)}return!1}function Yn(t,e){for(var n=e;n!==null;){if((n.f&nt)!==0)try{n.fn(t);return}catch{n.f^=nt}n=n.parent}throw tt=!1,t}function jn(t){return(t.f&it)===0&&(t.parent===null||(t.parent.f&nt)===0)}function ct(t,e,n,r){if(tt){if(n===null&&(tt=!1),jn(e))throw t;return}n!==null&&(tt=!0);{Yn(t,e);return}}function an(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];w!=null&&w.includes(t)||((l.f&x)!==0?an(l,e,!1):e===l&&(n?D(l,O):(l.f&E)!==0&&D(l,M),vt(l)))}}function ln(t){var A;var e=d,n=g,r=T,a=v,l=k,i=w,u=p,s=b,f=t.f;d=null,g=0,T=null,k=(f&m)!==0&&(b||!P||v===null),v=(f&(S|B))===0?t:null,w=null,bt(t.ctx),b=!1,st++,t.f|=pt;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(ft(t,g),o!==null&&g>0)for(o.length=g+d.length,c=0;c<d.length;c++)o[g+c]=d[c];else t.deps=o=d;if(!k)for(c=g;c<o.length;c++)((A=o[c]).reactions??(A.reactions=[])).push(t)}else o!==null&&g<o.length&&(ft(t,g),o.length=g);if(_t()&&T!==null&&!b&&o!==null&&(t.f&(x|M|O))===0)for(c=0;c<T.length;c++)an(T[c],t);return a!==t&&(st++,T!==null&&(r===null?r=T:r.push(...T))),_}finally{d=e,g=n,T=r,v=a,k=l,w=i,bt(u),b=s,t.f^=pt}}function Hn(t,e){let n=e.reactions;if(n!==null){var r=un.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&x)!==0&&(d===null||!d.includes(e))&&(D(e,M),(e.f&(m|et))===0&&(e.f^=et),jt(e),ft(e,0))}function ft(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Hn(t,n[r])}function At(t){var e=t.f;if((e&it)===0){D(t,E);var n=h,r=p,a=P;h=t,P=!0;try{(e&gt)!==0?Cn(t):Wt(t),zt(t);var l=ln(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var i=t.deps,u}catch(s){ct(s,t,n,r||t.ctx)}finally{P=a,h=n}}}function Bn(){try{yn()}catch(t){if(at!==null)ct(t,at,null);else throw t}}function sn(){var t=P;try{var e=0;for(P=!0;K.length>0;){e++>1e3&&Bn();var n=K,r=n.length;K=[];for(var a=0;a<r;a++){var l=Vn(n[a]);Un(l)}$.clear()}}finally{rt=!1,P=t,at=null}}function Un(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(it|j))===0)try{X(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){ct(a,r,null,r.ctx)}}}function vt(t){rt||(rt=!0,queueMicrotask(sn));for(var e=at=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(B|S))!==0){if((n&E)===0)return;e.f^=E}}K.push(e)}function Vn(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(S|B))!==0,l=a&&(r&E)!==0;if(!l&&(r&j)===0){if((r&Ct)!==0)e.push(n);else if(a)n.f^=E;else{var i=v;try{v=n,X(n)&&At(n)}catch(f){ct(f,n,null,n.ctx)}finally{v=i}}var u=n.first;if(u!==null){n=u;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function Gn(t){var e;for(St();K.length>0;)rt=!0,sn(),St();return e}async function He(){await Promise.resolve(),Gn()}function Y(t){var e=t.f,n=(e&x)!==0;if(v!==null&&!b){if(!(w!=null&&w.includes(t))){var r=v.deps;t.rv<st&&(t.rv=st,d===null&&r!==null&&r[g]===t?g++:d===null?d=[t]:(!k||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&m)===0&&(a.f^=m)}return n&&(a=t,X(a)&&Bt(a)),W&&$.has(t)?$.get(t):t.v}function Be(t){var e=b;try{return b=!0,t()}finally{b=e}}const Kn=-7169;function D(t,e){t.f=t.f&Kn|e}function Ue(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(G in t)yt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&G in n&&yt(n)}}}function yt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{yt(t[r],e)}catch{}const n=kt(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=on(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{In as $,Y as A,Xn as B,Ue as C,mt as D,re as E,Ne as F,ke as G,An as H,be as I,Le as J,Se as K,De as L,Pn as M,Ft as N,xn as O,Ie as P,Ye as Q,Fn as R,V as S,ee as T,y as U,Jn as V,me as W,_e as X,qt as Y,q as Z,I as _,L as a,Te as a0,ce as a1,G as a2,Qn as a3,oe as a4,ie as a5,ve as a6,Tt as a7,Ae as a8,zn as a9,ae as aA,ue as aB,se as aC,fe as aD,we as aE,Wn as aF,pn as aG,Zt as aa,kn as ab,je as ac,Gn as ad,Zn as ae,N as af,He as ag,ge as ah,de as ai,kt as aj,te as ak,on as al,H as am,lt as an,v as ao,fn as ap,hn as aq,On as ar,he as as,pe as at,j as au,bn as av,le as aw,Jt as ax,Mn as ay,F as az,Yt as b,Z as c,R as d,Rn as e,Vt as f,wt as g,Re as h,Oe as i,ne as j,Pe as k,$n as l,Me as m,dt as n,qe as o,Ee as p,p as q,C as r,xe as s,h as t,ye as u,Ce as v,ot as w,Be as x,Fe as y,Pt as z};
