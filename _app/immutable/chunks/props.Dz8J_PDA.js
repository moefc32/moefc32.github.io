import{T as A,U as k,V as ee,W as m,X as re,S as w,Y as h,Z as I,h as P,O as C,_ as ne,v as ae,a0 as ie,m as N,o as $,a1 as z,a2 as te,a3 as se,C as fe,B as q,a4 as K,N as B,a5 as F,D as W,a6 as X,a7 as ue,a8 as le,a9 as J,aa as ce,e as U,ab as oe,ac as de,ad as M,ae as _e,af as ve,ag as he,ah as pe,ai as Q,k as Z,aj as be,ak as Pe,R as me,al as G,am as T}from"./runtime.CUeBDQqs.js";import{c as we}from"./store.SM6p3XON.js";function E(e,r=null,s){if(typeof e!="object"||e===null||A in e)return e;const t=ae(e);if(t!==k&&t!==ee)return e;var a=new Map,c=ie(e),_=m(0);c&&a.set("length",m(e.length));var v;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&re();var f=a.get(n);return f===void 0?(f=m(i.value),a.set(n,f)):w(f,E(i.value,v)),!0},deleteProperty(l,n){var i=a.get(n);if(i===void 0)n in l&&a.set(n,m(h));else{if(c&&typeof n=="string"){var f=a.get("length"),u=Number(n);Number.isInteger(u)&&u<f.v&&w(f,u)}w(i,h),H(_)}return!0},get(l,n,i){var p;if(n===A)return e;var f=a.get(n),u=n in l;if(f===void 0&&(!u||(p=I(l,n))!=null&&p.writable)&&(f=m(E(u?l[n]:h,v)),a.set(n,f)),f!==void 0){var o=P(f);return o===h?void 0:o}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=a.get(n);f&&(i.value=P(f))}else if(i===void 0){var u=a.get(n),o=u==null?void 0:u.v;if(u!==void 0&&o!==h)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return i},has(l,n){var o;if(n===A)return!0;var i=a.get(n),f=i!==void 0&&i.v!==h||Reflect.has(l,n);if(i!==void 0||C!==null&&(!f||(o=I(l,n))!=null&&o.writable)){i===void 0&&(i=m(f?E(l[n],v):h),a.set(n,i));var u=P(i);if(u===h)return!1}return f},set(l,n,i,f){var y;var u=a.get(n),o=n in l;if(c&&n==="length")for(var p=i;p<u.v;p+=1){var g=a.get(p+"");g!==void 0?w(g,h):p in l&&(g=m(h),a.set(p+"",g))}u===void 0?(!o||(y=I(l,n))!=null&&y.writable)&&(u=m(void 0),w(u,E(i,v)),a.set(n,u)):(o=u.v!==h,w(u,E(i,v)));var b=Reflect.getOwnPropertyDescriptor(l,n);if(b!=null&&b.set&&b.set.call(f,i),!o){if(c&&typeof n=="string"){var O=a.get("length"),S=Number(n);Number.isInteger(S)&&S>=O.v&&w(O,S+1)}H(_)}return!0},ownKeys(l){P(_);var n=Reflect.ownKeys(l).filter(u=>{var o=a.get(u);return o===void 0||o.v!==h});for(var[i,f]of a)f.v!==h&&!(i in l)&&n.push(i);return n},setPrototypeOf(){ne()}})}function H(e,r=1){w(e,e.v+r)}function Oe(e,r,s,t=null,a=!1){N&&$();var c=e,_=null,v=null,l=null,n=a?X:0;z(()=>{if(l===(l=!!r()))return;let i=!1;if(N){const f=c.data===te;l===f&&(c=se(),fe(c),q(!1),i=!0)}l?(_?K(_):_=B(()=>s(c)),v&&F(v,()=>{v=null})):(v?K(v):t&&(v=B(()=>t(c))),_&&F(_,()=>{_=null})),i&&q(!0)},n),N&&(c=W)}function Se(e,r,s){N&&$();var t=e,a,c;z(()=>{a!==(a=r())&&(c&&(F(c),c=null),a&&(c=B(()=>s(t,a))))},X),N&&(t=W)}const ge={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=Re({get[r](){return e.props[r]}},r,J)),e.special[r](s),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function xe(e,r){return new Proxy({props:e,exclude:r,special:{},version:m(0)},ge)}const ye={get(e,r){let s=e.props.length;for(;s--;){let t=e.props[s];if(T(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,s){let t=e.props.length;for(;t--;){let a=e.props[t];T(a)&&(a=a());const c=I(a,r);if(c&&c.set)return c.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let t=e.props[s];if(T(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const a=I(t,r);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,r){if(r===A||r===Q)return!1;for(let s of e.props)if(T(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){T(s)&&(s=s());for(const t in s)r.includes(t)||r.push(t)}return r}};function Te(...e){return new Proxy({props:e},ye)}function V(e){for(var r=C,s=C;r!==null&&!(r.f&(oe|de));)r=r.parent;try{return M(r),e()}finally{M(s)}}function Re(e,r,s,t){var j;var a=(s&_e)!==0,c=!ve||(s&he)!==0,_=(s&pe)!==0,v=(s&Pe)!==0,l=!1,n;_?[n,l]=we(()=>e[r]):n=e[r];var i=A in e||Q in e,f=((j=I(e,r))==null?void 0:j.set)??(i&&_&&r in e?d=>e[r]=d:void 0),u=t,o=!0,p=!1,g=()=>(p=!0,o&&(o=!1,v?u=U(t):u=t),u);n===void 0&&t!==void 0&&(f&&c&&ue(),n=g(),f&&f(n));var b;if(c)b=()=>{var d=e[r];return d===void 0?g():(o=!0,p=!1,d)};else{var O=V(()=>(a?Z:be)(()=>e[r]));O.f|=le,b=()=>{var d=P(O);return d!==void 0&&(u=void 0),d===void 0?u:d}}if(!(s&J))return b;if(f){var S=e.$$legacy;return function(d,R){return arguments.length>0?((!c||!R||S||l)&&f(R?b():d),d):b()}}var y=!1,Y=!1,D=me(n),x=V(()=>Z(()=>{var d=b(),R=P(D);return y?(y=!1,Y=!0,R):(Y=!1,D.v=d)}));return a||(x.equals=ce),function(d,R){if(arguments.length>0){const L=R?P(x):c&&_?E(d):d;return x.equals(L)||(y=!0,w(D,L),p&&u!==void 0&&(u=L),U(()=>P(x))),d}return P(x)}}export{E as a,Se as c,Oe as i,xe as l,Re as p,Te as s};
