import{x as m,y as H,H as I,z as L,A as p,B as b,C as N,o as C,D as c,E as M,F as S,G as Y,I as j,J as k,K as V,M as $,N as z,p as B,m as w,O as F,a as G,d as J,P as R,e as K,Q as P,R as Q,h as W,S as q}from"./runtime.CUeBDQqs.js";import{g as U,r as A,j as X,k as h,l as Z,m as x}from"./disclose-version.B1Z3vzvU.js";function ne(s,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(s.__t??(s.__t=s.nodeValue))&&(s.__t=t,s.nodeValue=t==null?"":t+"")}function ee(s,e){return D(s,e)}function ae(s,e){m(),e.intro=e.intro??!1;const t=e.target,r=w,o=c;try{for(var n=H(t);n&&(n.nodeType!==8||n.data!==I);)n=L(n);if(!n)throw p;b(!0),N(n),C();const f=D(s,{...e,anchor:n});if(c===null||c.nodeType!==8||c.data!==M)throw S(),p;return b(!1),f}catch(f){if(f===p)return e.recover===!1&&Y(),m(),j(t),b(!1),ee(s,e);throw f}finally{b(r),N(o),X()}}const d=new Map;function D(s,{target:e,anchor:t,props:r={},events:o,context:n,intro:f=!0}){m();var v=new Set,y=u=>{for(var a=0;a<u.length;a++){var i=u[a];if(!v.has(i)){v.add(i);var l=x(i);e.addEventListener(i,h,{passive:l});var T=d.get(i);T===void 0?(document.addEventListener(i,h,{passive:l}),d.set(i,1)):d.set(i,T+1)}}};y(k(U)),A.add(y);var _=void 0,O=V(()=>{var u=t??e.appendChild($());return z(()=>{if(n){B({});var a=J;a.c=n}o&&(r.$$events=o),w&&Z(u,null),_=s(u,r)||{},w&&(F.nodes_end=c),n&&G()}),()=>{var l;for(var a of v){e.removeEventListener(a,h);var i=d.get(a);--i===0?(document.removeEventListener(a,h),d.delete(a)):d.set(a,i)}A.delete(y),E.delete(_),u!==t&&((l=u.parentNode)==null||l.removeChild(u))}});return E.set(_,O),_}let E=new WeakMap;function ie(s){const e=E.get(s);e&&e()}function se(s,e,t){if(s==null)return e(void 0),R;const r=K(()=>s.subscribe(e,t));return r.unsubscribe?()=>r.unsubscribe():r}let g=!1;function ue(s,e,t){const r=t[e]??(t[e]={store:null,source:Q(void 0),unsubscribe:R});if(r.store!==s)if(r.unsubscribe(),r.store=s??null,s==null)r.source.v=void 0,r.unsubscribe=R;else{var o=!0;r.unsubscribe=se(s,n=>{o?r.source.v=n:q(r.source,n)}),o=!1}return W(r.source)}function oe(){const s={};return P(()=>{for(var e in s)s[e].unsubscribe()}),s}function de(s){var e=g;try{return g=!1,[s(),g]}finally{g=e}}export{ne as a,ue as b,de as c,ae as h,ee as m,oe as s,ie as u};
