!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=125)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(37))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,r){var e=r(4),o=r(13),u=r(16);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(0),o=r(21),u=r(2),i=r(22),c=r(23),f=r(40),a=o("wks"),s=e.Symbol,p=f?s:s&&s.withoutSetter||i;t.exports=function(t){return u(a,t)||(c&&u(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},function(t,n,r){var e=r(24),o=r(9);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(0),o=r(5);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(0),o=r(26).f,u=r(5),i=r(27),c=r(11),f=r(43),a=r(49);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,h=t.stat;if(r=d?e:h?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},function(t,n,r){var e=r(4),o=r(25),u=r(6),i=r(18),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(u(t),n=i(n,!0),u(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports={}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(14),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(20),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(0),o=r(11),u=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,n,r){var e=r(34),o=r(20);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e=r(1),o=r(10),u="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(4),o=r(1),u=r(32);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(4),o=r(42),u=r(16),i=r(8),c=r(18),f=r(2),a=r(25),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=i(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(0),o=r(5),u=r(2),i=r(11),c=r(19),f=r(36),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||u(r,"name")||o(r,"name",n),s(r).source=p.join("string"==typeof n?n:"")),t!==e?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=r:o(t,n,r)):a?t[n]=r:i(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,r){var e=r(45),o=r(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t])||u(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},,function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(21),o=r(22),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,n,r){var e=r(0),o=r(3),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},function(t,n,r){var e=r(8),o=r(17),u=r(47),i=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},function(t,n){t.exports=!1},function(t,n,r){var e=r(2),o=r(8),u=r(33).indexOf,i=r(15);t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)!e(i,r)&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n,r){var e,o,u,i=r(38),c=r(0),f=r(3),a=r(5),s=r(2),p=r(31),l=r(15),v=c.WeakMap;if(i){var y=new v,d=y.get,h=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},u=function(t){return h.call(y,t)}}else{var x=p("state");l[x]=!0,e=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},u=function(t){return s(t,x)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!f(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(19),u=e.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(23);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(9);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!e.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(44),u=r(26),i=r(13);t.exports=function(t,n){for(var r=o(n),c=i.f,f=u.f,a=0;a<r.length;a++){var s=r[a];e(t,s)||c(t,s,f(n,s))}}},function(t,n,r){var e=r(28),o=r(46),u=r(48),i=r(6);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(i(t)),r=u.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(0);t.exports=e},function(t,n,r){var e=r(35),o=r(30).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(14),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(1),o=/#|\.prototype\./,u=function(t,n){var r=c[i(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},i=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},,,function(t,n,r){var e=r(4),o=r(1),u=r(2),i=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(u(c,t))return c[t];n||(n={});var r=[][t],a=!!u(n,"ACCESSORS")&&n.ACCESSORS,s=u(n,0)?n[0]:f,p=u(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(a&&!e)return!0;var t={length:-1};a?i(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,s,p)}))}},function(t,n,r){var e=r(10);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(39);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},,,,,,,function(t,n,r){var e=r(54),o=r(24),u=r(41),i=r(17),c=r(64),f=[].push,a=function(t){var n=1==t,r=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,y,d,h){for(var g,x,b=u(v),m=o(b),O=e(y,d,3),S=i(m.length),w=0,j=h||c,P=n?j(v,S):r?j(v,0):void 0;S>w;w++)if((l||w in m)&&(x=O(g=m[w],w,b),t))if(n)P[w]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:f.call(P,g)}else if(s)return!1;return p?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},,,function(t,n,r){var e=r(3),o=r(53),u=r(7)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[u])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},,,function(t,n,r){"use strict";var e=r(12),o=r(61).filter,u=r(68),i=r(52),c=u("filter"),f=i("filter");e({target:"Array",proto:!0,forced:!c||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(1),o=r(7),u=r(69),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,u=r(0),i=r(70),c=u.process,f=c&&c.versions,a=f&&f.v8;a?o=(e=a.split("."))[0]+e[1]:i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(28);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e,o=r(6),u=r(72),i=r(30),c=r(15),f=r(74),a=r(32),s=r(31),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=i.length;r--;)delete y.prototype[i[r]];return y()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=y(),void 0===n?r:u(r,n)}},function(t,n,r){var e=r(4),o=r(13),u=r(6),i=r(73);t.exports=e?Object.defineProperties:function(t,n){u(t);for(var r,e=i(n),c=e.length,f=0;c>f;)o.f(t,r=e[f++],n[r]);return t}},function(t,n,r){var e=r(35),o=r(30);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(28);t.exports=e("document","documentElement")},,,,function(t,n,r){"use strict";var e=r(12),o=r(33).includes,u=r(79);e({target:"Array",proto:!0,forced:!r(52)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},function(t,n,r){var e=r(7),o=r(71),u=r(13),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(67),r(78);function e(t){if(t<2)return[];for(var n=[2],r=[],e=3;e<=t;e+=2)n.push(e);for(var o=4;n[o]<=t;o+=3)r.push(n[o]);for(var u=2;n[u]<=t;u+=5)r.push(n[u+5]);for(var i=3;n[i]<=t;i+=7)r.push(n[i+7]);return n=n.filter((function(t){return!r.includes(t)}))}window.primes=e,console.log(e(6)),console.log(e(17))}]);