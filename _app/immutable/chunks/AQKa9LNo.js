import{af as C,r as h,h as E,s as N,V as I,ag as B,ah as M}from"./4wcF8ETo.js";import{j as q,k as z,l as D,n as G,m as K}from"./AYSNWXvH.js";function P(s,i){if(i){const r=document.body;s.autofocus=!0,C(()=>{document.activeElement===r&&s.focus()})}}function Q(s,i,r,t,e){var d;h&&E();var l=(d=i.$$slots)==null?void 0:d[r],v=!1;l===!0&&(l=i.children,v=!0),l===void 0||l(s,v?()=>t:t)}function w(s){var i,r,t="";if(typeof s=="string"||typeof s=="number")t+=s;else if(typeof s=="object")if(Array.isArray(s)){var e=s.length;for(i=0;i<e;i++)s[i]&&(r=w(s[i]))&&(t&&(t+=" "),t+=r)}else for(r in s)s[r]&&(t&&(t+=" "),t+=r);return t}function R(){for(var s,i,r=0,t="",e=arguments.length;r<e;r++)(s=arguments[r])&&(i=w(s))&&(t&&(t+=" "),t+=i);return t}function S(s){return typeof s=="object"?R(s):s??""}function Y(s,i){i?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function F(s,i,r,t){var e=s.__attributes??(s.__attributes={});h&&(e[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||e[i]!==(e[i]=r)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[B]=r),r==null?s.removeAttribute(i):typeof r!="string"&&L(s).includes(i)?s[i]=r:s.setAttribute(i,r))}function U(s,i,r,t,e=!1,l=!1,v=!1){let d=h&&l;d&&N(!1);var n=i||{},p=s.tagName==="OPTION";for(var g in i)g in r||(r[g]=null);r.class&&(r.class=S(r.class));var O=L(s),T=s.__attributes??(s.__attributes={});for(const f in r){let a=r[f];if(p&&f==="value"&&a==null){s.value=s.__value="",n[f]=a;continue}var A=n[f];if(a!==A){n[f]=a;var b=f[0]+f[1];if(b!=="$$"){if(b==="on"){const o={},_="$$"+f;let u=f.slice(2);var y=K(u);if(q(u)&&(u=u.slice(0,-7),o.capture=!0),!y&&A){if(a!=null)continue;s.removeEventListener(u,n[_],o),n[_]=null}if(a!=null)if(y)s[`__${u}`]=a,D([u]);else{let V=function(j){n[f].call(this,j)};n[_]=z(u,s,V,o)}else y&&(s[`__${u}`]=void 0)}else if(f==="style"&&a!=null)s.style.cssText=a+"";else if(f==="autofocus")P(s,!!a);else if(!l&&(f==="__value"||f==="value"&&a!=null))s.value=s.__value=a;else if(f==="selected"&&p)Y(s,a);else{var c=f;e||(c=G(c));var k=c==="defaultValue"||c==="defaultChecked";if(a==null&&!l&&!k)if(T[f]=null,c==="value"||c==="checked"){let o=s;const _=i===void 0;if(c==="value"){let u=o.defaultValue;o.removeAttribute(c),o.defaultValue=u,o.value=o.__value=_?u:null}else{let u=o.defaultChecked;o.removeAttribute(c),o.defaultChecked=u,o.checked=_?u:!1}}else s.removeAttribute(f);else k||O.includes(c)&&(l||typeof a!="string")?s[c]=a:typeof a!="function"&&F(s,c,a)}f==="style"&&"__styles"in s&&(s.__styles={})}}}return d&&N(!0),n}var $=new Map;function L(s){var i=$.get(s.nodeName);if(i)return i;$.set(s.nodeName,i=[]);for(var r,t=s,e=Element.prototype;e!==t;){r=M(t);for(var l in r)r[l].set&&i.push(l);t=I(t)}return i}export{F as a,U as b,Q as s};
