(self.webpackChunkemerald_sys_about=self.webpackChunkemerald_sys_about||[]).push([[682],{6218:function(n,t,e){e(5743);var r=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};n.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(n){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()},2960:function(n,t,e){var r;if(e(5743),"object"==typeof globalThis)r=globalThis;else try{r=e(6218)}catch(a){}finally{if(r||"undefined"==typeof window||(r=window),!r)throw new Error("Could not determine global this")}var o=r.WebSocket||r.MozWebSocket,i=e(7284);function c(n,t){return t?new o(n,t):new o(n)}o&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(n){Object.defineProperty(c,n,{get:function(){return o[n]}})})),n.exports={w3cwebsocket:o?c:null,version:i}},7284:function(n,t,e){n.exports=e(9794).version},9662:function(n,t,e){var r=e(614),o=e(6330),i=TypeError;n.exports=function(n){if(r(n))return n;throw i(o(n)+" is not a function")}},9670:function(n,t,e){var r=e(111),o=String,i=TypeError;n.exports=function(n){if(r(n))return n;throw i(o(n)+" is not an object")}},1318:function(n,t,e){var r=e(5656),o=e(1400),i=e(6244),c=function(n){return function(t,e,c){var a,u=r(t),f=i(u),s=o(c,f);if(n&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((n||s in u)&&u[s]===e)return n||s||0;return!n&&-1}};n.exports={includes:c(!0),indexOf:c(!1)}},4326:function(n,t,e){var r=e(1702),o=r({}.toString),i=r("".slice);n.exports=function(n){return i(o(n),8,-1)}},9920:function(n,t,e){var r=e(2597),o=e(3887),i=e(1236),c=e(3070);n.exports=function(n,t,e){for(var a=o(t),u=c.f,f=i.f,s=0;s<a.length;s++){var l=a[s];r(n,l)||e&&r(e,l)||u(n,l,f(t,l))}}},8880:function(n,t,e){var r=e(9781),o=e(3070),i=e(9114);n.exports=r?function(n,t,e){return o.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},9114:function(n){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},8052:function(n,t,e){var r=e(614),o=e(3070),i=e(6339),c=e(3072);n.exports=function(n,t,e,a){a||(a={});var u=a.enumerable,f=void 0!==a.name?a.name:t;if(r(e)&&i(e,f,a),a.global)u?n[t]=e:c(t,e);else{try{a.unsafe?n[t]&&(u=!0):delete n[t]}catch(s){}u?n[t]=e:o.f(n,t,{value:e,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return n}},3072:function(n,t,e){var r=e(7854),o=Object.defineProperty;n.exports=function(n,t){try{o(r,n,{value:t,configurable:!0,writable:!0})}catch(e){r[n]=t}return t}},9781:function(n,t,e){var r=e(7293);n.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(n,t,e){var r=e(7854),o=e(111),i=r.document,c=o(i)&&o(i.createElement);n.exports=function(n){return c?i.createElement(n):{}}},8113:function(n,t,e){var r=e(5005);n.exports=r("navigator","userAgent")||""},7392:function(n,t,e){var r,o,i=e(7854),c=e(8113),a=i.process,u=i.Deno,f=a&&a.versions||u&&u.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),n.exports=o},748:function(n){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(n,t,e){var r=e(7854),o=e(1236).f,i=e(8880),c=e(8052),a=e(3072),u=e(9920),f=e(4705);n.exports=function(n,t){var e,s,l,p,v,b=n.target,g=n.global,d=n.stat;if(e=g?r:d?r[b]||a(b,{}):(r[b]||{}).prototype)for(s in t){if(p=t[s],l=n.dontCallGetSet?(v=o(e,s))&&v.value:e[s],!f(g?s:b+(d?".":"#")+s,n.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(n.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,n)}}},7293:function(n){n.exports=function(n){try{return!!n()}catch(t){return!0}}},4374:function(n,t,e){var r=e(7293);n.exports=!r((function(){var n=function(){}.bind();return"function"!=typeof n||n.hasOwnProperty("prototype")}))},6916:function(n,t,e){var r=e(4374),o=Function.prototype.call;n.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(n,t,e){var r=e(9781),o=e(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,f=a&&(!r||r&&c(i,"name").configurable);n.exports={EXISTS:a,PROPER:u,CONFIGURABLE:f}},1702:function(n,t,e){var r=e(4374),o=Function.prototype,i=o.bind,c=o.call,a=r&&i.bind(c,c);n.exports=r?function(n){return n&&a(n)}:function(n){return n&&function(){return c.apply(n,arguments)}}},5005:function(n,t,e){var r=e(7854),o=e(614),i=function(n){return o(n)?n:void 0};n.exports=function(n,t){return arguments.length<2?i(r[n]):r[n]&&r[n][t]}},8173:function(n,t,e){var r=e(9662);n.exports=function(n,t){var e=n[t];return null==e?void 0:r(e)}},7854:function(n,t,e){var r=function(n){return n&&n.Math==Math&&n};n.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(n,t,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);n.exports=Object.hasOwn||function(n,t){return i(o(n),t)}},3501:function(n){n.exports={}},4664:function(n,t,e){var r=e(9781),o=e(7293),i=e(317);n.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(n,t,e){var r=e(1702),o=e(7293),i=e(4326),c=Object,a=r("".split);n.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(n){return"String"==i(n)?a(n,""):c(n)}:c},2788:function(n,t,e){var r=e(1702),o=e(614),i=e(5465),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(n){return c(n)}),n.exports=i.inspectSource},9909:function(n,t,e){var r,o,i,c=e(8536),a=e(7854),u=e(1702),f=e(111),s=e(8880),l=e(2597),p=e(5465),v=e(6200),b=e(3501),g="Object already initialized",d=a.TypeError,m=a.WeakMap;if(c||p.state){var h=p.state||(p.state=new m),y=u(h.get),w=u(h.has),x=u(h.set);r=function(n,t){if(w(h,n))throw new d(g);return t.facade=n,x(h,n,t),t},o=function(n){return y(h,n)||{}},i=function(n){return w(h,n)}}else{var E=v("state");b[E]=!0,r=function(n,t){if(l(n,E))throw new d(g);return t.facade=n,s(n,E,t),t},o=function(n){return l(n,E)?n[E]:{}},i=function(n){return l(n,E)}}n.exports={set:r,get:o,has:i,enforce:function(n){return i(n)?o(n):r(n,{})},getterFor:function(n){return function(t){var e;if(!f(t)||(e=o(t)).type!==n)throw d("Incompatible receiver, "+n+" required");return e}}}},614:function(n){n.exports=function(n){return"function"==typeof n}},4705:function(n,t,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,c=function(n,t){var e=u[a(n)];return e==s||e!=f&&(o(t)?r(t):!!t)},a=c.normalize=function(n){return String(n).replace(i,".").toLowerCase()},u=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";n.exports=c},111:function(n,t,e){var r=e(614);n.exports=function(n){return"object"==typeof n?null!==n:r(n)}},1913:function(n){n.exports=!1},2190:function(n,t,e){var r=e(5005),o=e(614),i=e(7976),c=e(3307),a=Object;n.exports=c?function(n){return"symbol"==typeof n}:function(n){var t=r("Symbol");return o(t)&&i(t.prototype,a(n))}},6244:function(n,t,e){var r=e(7466);n.exports=function(n){return r(n.length)}},6339:function(n,t,e){var r=e(7293),o=e(614),i=e(2597),c=e(9781),a=e(6530).CONFIGURABLE,u=e(2788),f=e(9909),s=f.enforce,l=f.get,p=Object.defineProperty,v=c&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),g=n.exports=function(n,t,e){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(t="get "+t),e&&e.setter&&(t="set "+t),(!i(n,"name")||a&&n.name!==t)&&(c?p(n,"name",{value:t,configurable:!0}):n.name=t),v&&e&&i(e,"arity")&&n.length!==e.arity&&p(n,"length",{value:e.arity});try{e&&i(e,"constructor")&&e.constructor?c&&p(n,"prototype",{writable:!1}):n.prototype&&(n.prototype=void 0)}catch(o){}var r=s(n);return i(r,"source")||(r.source=b.join("string"==typeof t?t:"")),n};Function.prototype.toString=g((function(){return o(this)&&l(this).source||u(this)}),"toString")},4758:function(n){var t=Math.ceil,e=Math.floor;n.exports=Math.trunc||function(n){var r=+n;return(r>0?e:t)(r)}},133:function(n,t,e){var r=e(7392),o=e(7293);n.exports=!!Object.getOwnPropertySymbols&&!o((function(){var n=Symbol();return!String(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(n,t,e){var r=e(7854),o=e(614),i=e(2788),c=r.WeakMap;n.exports=o(c)&&/native code/.test(i(c))},3070:function(n,t,e){var r=e(9781),o=e(4664),i=e(3353),c=e(9670),a=e(4948),u=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";t.f=r?i?function(n,t,e){if(c(n),t=a(t),c(e),"function"==typeof n&&"prototype"===t&&"value"in e&&v in e&&!e.writable){var r=s(n,t);r&&r.writable&&(n[t]=e.value,e={configurable:p in e?e.configurable:r.configurable,enumerable:l in e?e.enumerable:r.enumerable,writable:!1})}return f(n,t,e)}:f:function(n,t,e){if(c(n),t=a(t),c(e),o)try{return f(n,t,e)}catch(r){}if("get"in e||"set"in e)throw u("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},1236:function(n,t,e){var r=e(9781),o=e(6916),i=e(5296),c=e(9114),a=e(5656),u=e(4948),f=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(n,t){if(n=a(n),t=u(t),s)try{return l(n,t)}catch(e){}if(f(n,t))return c(!o(i.f,n,t),n[t])}},8006:function(n,t,e){var r=e(6324),o=e(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},5181:function(n,t){t.f=Object.getOwnPropertySymbols},7976:function(n,t,e){var r=e(1702);n.exports=r({}.isPrototypeOf)},6324:function(n,t,e){var r=e(1702),o=e(2597),i=e(5656),c=e(1318).indexOf,a=e(3501),u=r([].push);n.exports=function(n,t){var e,r=i(n),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&u(s,e);for(;t.length>f;)o(r,e=t[f++])&&(~c(s,e)||u(s,e));return s}},5296:function(n,t){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);t.f=o?function(n){var t=r(this,n);return!!t&&t.enumerable}:e},2140:function(n,t,e){var r=e(6916),o=e(614),i=e(111),c=TypeError;n.exports=function(n,t){var e,a;if("string"===t&&o(e=n.toString)&&!i(a=r(e,n)))return a;if(o(e=n.valueOf)&&!i(a=r(e,n)))return a;if("string"!==t&&o(e=n.toString)&&!i(a=r(e,n)))return a;throw c("Can't convert object to primitive value")}},3887:function(n,t,e){var r=e(5005),o=e(1702),i=e(8006),c=e(5181),a=e(9670),u=o([].concat);n.exports=r("Reflect","ownKeys")||function(n){var t=i.f(a(n)),e=c.f;return e?u(t,e(n)):t}},4488:function(n){var t=TypeError;n.exports=function(n){if(null==n)throw t("Can't call method on "+n);return n}},6200:function(n,t,e){var r=e(2309),o=e(9711),i=r("keys");n.exports=function(n){return i[n]||(i[n]=o(n))}},5465:function(n,t,e){var r=e(7854),o=e(3072),i="__core-js_shared__",c=r[i]||o(i,{});n.exports=c},2309:function(n,t,e){var r=e(1913),o=e(5465);(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.24.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(n,t,e){var r=e(9303),o=Math.max,i=Math.min;n.exports=function(n,t){var e=r(n);return e<0?o(e+t,0):i(e,t)}},5656:function(n,t,e){var r=e(8361),o=e(4488);n.exports=function(n){return r(o(n))}},9303:function(n,t,e){var r=e(4758);n.exports=function(n){var t=+n;return t!=t||0===t?0:r(t)}},7466:function(n,t,e){var r=e(9303),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},7908:function(n,t,e){var r=e(4488),o=Object;n.exports=function(n){return o(r(n))}},7593:function(n,t,e){var r=e(6916),o=e(111),i=e(2190),c=e(8173),a=e(2140),u=e(5112),f=TypeError,s=u("toPrimitive");n.exports=function(n,t){if(!o(n)||i(n))return n;var e,u=c(n,s);if(u){if(void 0===t&&(t="default"),e=r(u,n,t),!o(e)||i(e))return e;throw f("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(n,t)}},4948:function(n,t,e){var r=e(7593),o=e(2190);n.exports=function(n){var t=r(n,"string");return o(t)?t:t+""}},6330:function(n){var t=String;n.exports=function(n){try{return t(n)}catch(e){return"Object"}}},9711:function(n,t,e){var r=e(1702),o=0,i=Math.random(),c=r(1..toString);n.exports=function(n){return"Symbol("+(void 0===n?"":n)+")_"+c(++o+i,36)}},3307:function(n,t,e){var r=e(133);n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(n,t,e){var r=e(9781),o=e(7293);n.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(n,t,e){var r=e(7854),o=e(2309),i=e(2597),c=e(9711),a=e(133),u=e(3307),f=o("wks"),s=r.Symbol,l=s&&s.for,p=u?s:s&&s.withoutSetter||c;n.exports=function(n){if(!i(f,n)||!a&&"string"!=typeof f[n]){var t="Symbol."+n;a&&i(s,n)?f[n]=s[n]:f[n]=u&&l?l(t):p(t)}return f[n]}},5837:function(n,t,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(n,t,e){e(5837)},7699:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return rn}});var r,o,i,c,a,u,f,s,l,p,v,b,g,d,m,h,y,w,x,E,P,I,Z,j=e(1880),A=e(7294),O=e(5414),S=e(3494),k=e(297),M=S.ZP.div(r||(r=(0,j.Z)(['\n    background: #222;\n    box-shadow: 3px 3px #333;\n    width: 550px;\n    padding: 20px;\n    border-radius: 5px;\n    margin: 25% auto;\n    color: #fff;\n    font-family: "Ubuntu", monospace, sans-serif;\n']))),C=S.ZP.div(o||(o=(0,j.Z)(["\n    font-weight: 700;\n    font-size: 35px;\n"]))),R=S.ZP.div(i||(i=(0,j.Z)(["\n    margin-top: 15px;\n    font-size: 18px;\n"]))),G=S.ZP.img(c||(c=(0,j.Z)(["\n    float: left;\n    border-radius: 5px;\n    margin-right: 10px;\n"]))),D=function(n){return A.createElement(M,null,A.createElement(G,{src:"data:image/gif;base64,R0lGODlhLAAsAPcAAEFBQfn//uylqr29vf3u8+yzuv/8/pmZmdHR0URERPqVove8wjk5Od3d3fj4+P+ZngsLCz4+Pk1NTfb29sXFxfLy8q2trbm5uc3NzfOkq/OYno2NjbGxsaGhobW1taioqPyaoKSkpImJif3j5P/6/Xp6ev3Y3PrM056envGrtDExMWxsbHFxcf/5+v+aozQ0NOyts//8/IWFhZWVlerq6v2coYCAgPz//PLEy319fSkpKf719VFRUejo6PrT2P7d4iUlJfDX1vLa3WJiYvT09C4uLlZWVgEBAR0dHeLi4u/v7/Dw8P6cnv///0pKSiEhIezEyGhoaMrKyuXl5ebm5hgYGGVlZf6VnvrFyl5eXhQUFOzs7NTU1HZ2dvmYn/759v/3+PLDxuDg4PTq7/zJzO69we/M1Pudofbd4Pjk6sDAwPujqviZotjY2NbW1u2eo/O5vv6apfvBxEhISBAQEPqWnfLU05GRkf78+vzy7v7++sPDw/aVncfHx/qts/Tj4/Kip1lZWfTg6f+XoPLIzvuepf7u7/zQ1fTU2/ubotvb2wYGBvaZoPHj3/q1v/ycqP/w8fStu/+Yo/r1+vecovv6//q4u/O2v/rx9/iapQICAv/p6vqqr/v++v71/P2Smvz8/v2bo/uytPTp5v/q7u+Znvft7v78+P708ffp7ujE0fn29f/z9PCfpf+anP2Wm++pr/Kan/GcovLPz/v8+fv0/PafpPicn/iVm/aWoPv27/rp6/avtfuXnv39+fegpveYnP+TnPmTm/jv8vWnr/7+/v39/f/+//z8/P6bofv7+/7///r6+v3//////v/+/v+aof///f/+/f7+//z////+/P///P3//v7//v7//f+bov3+//+ZoP6boP+bn/7+/f3//P3+/v6aoP7+/Pz9/fz+/vz+//z//fv9/P6aof38/f79+/3++PnU5PqWlvr7+fjz+fr8/N/f3/yjtf38/PKbqPyRofuYovzv7PufsP//+P/n6vqWp/v4+/z4+QAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQ0Y0MDJGRUJBM0QxMUU4OUUwQ0RBRkIyODMyNDNDRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQ0Y0MDJGRkJBM0QxMUU4OUUwQ0RBRkIyODMyNDNDRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFDRjQwMkZDQkEzRDExRTg5RTBDREFGQjI4MzI0M0NEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFDRjQwMkZEQkEzRDExRTg5RTBDREFGQjI4MzI0M0NEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECRQA/wAsAAAAACwALAAACP8A/wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyYGLTg6EEEGLykUJpsyAcDImMiIraIpcxLIBsp9TXoSEgMSKhSk/kw74CAHIhi1Jo/70qGWFT6lSOS56MQCrV4oQwhKEkAWpV6wTIRiR0aUITS0biJz9GhHChj8jkE2RgMTC3LMSgWw5cWIElgYRrv7NGlECPnw7fpDZYWHGYqwpH0KwgkUOJ0dJ5UbdkmWFaKw5JAAJmzkhhBXIdqxZs+OshUVauMwlMmXABiNIxB7c/POQiblcIljZgiGHXt3IZ2R5EXyshMtSEUcAkoDI6bNbuIRvWBEhOIQiDb5fnoIBg4QERqBfJtLAQo4XRRJ08aAY+5YBFKiHHW8DyCDBCxGsEAIXAmLnoFRbUCBdBMrNgAFUD2aIFREYjBfBC0ZsMIBZGpZ4U31dJPBCAjnw16CJixFoIIIKwghjhNLZqOOOOgYEACH5BAUUAP8ALAAAAAAsACwAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmBi04OhBBBi8pFCabMgHAyJjIiK2iKXMSyAbKfU16EhIDEioUpP5MO+AgByIYtSaP+9KhlhU+pUjkuejEAq1eJEHQWhJAFqVesECFIkCEjCxCxWjYQOfv1YQQhJ5CZsLOhyCIkFuiehZgDH5Ydjkwg4/Iih+DBD2eMGHHiUFIuRq4+jiqWoRU5JziFGpF0i+afW7KsmOs1h4S3EFImLIL0hJ80gi0s0sKFLpEpAzYYQRL2IAQKP3c85hLByhYMjqf0pstlRpYXxAl22Yy1QYQIQBIQdmFNdwuXECsiINECZMAU8tynYMAgIYGR6ZuJNLCQI0GRBF14cNpmWwxAAXzc3VSgDBK8EMEKIXCBYIIURrUFBdZ9Z8UMGEBV4YdREYEBehG8YMQG7oGo4k37dZHACwnkIOCEKz722wAMOghhjSpeaB2PQAapYkAAOw=="}),A.createElement(C,null,n.title),A.createElement(R,null,n.description),n.children)},Y=(0,S.F4)(a||(a=(0,j.Z)(["\n    0% {\n        transform: scale(.33);\n    }\n    80%, 100% {\n        opacity: 0;\n    }\n"]))),z=(0,S.F4)(u||(u=(0,j.Z)(["\n    0% {\n        transform: scale(.8);\n    }\n    50% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(.8);\n    }\n"]))),B=S.ZP.div(f||(f=(0,j.Z)(["\n    padding: 5px;\n"]))),L=S.ZP.div(s||(s=(0,j.Z)(["\n    position: relative;\n    display: inline;\n"]))),N=S.ZP.img(l||(l=(0,j.Z)(["\n    height: 48px;\n    border-radius: 5px;\n"]))),F=S.ZP.img(p||(p=(0,j.Z)(["\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    height: 14px;\n"]))),U=S.ZP.div(v||(v=(0,j.Z)(["\n    float: right;\n"]))),J=S.ZP.span(b||(b=(0,j.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),W=S.ZP.div(g||(g=(0,j.Z)(["\n    position: relative;\n    display: block;\n"]))),T=S.ZP.span(d||(d=(0,j.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),Q=function(n){return A.createElement(A.Fragment,null,n.src&&A.createElement(B,null,A.createElement(L,null,A.createElement(N,{src:n.src.album_art_url}),A.createElement(F,{src:"https://cdn-icons-png.flaticon.com/512/174/174872.png"})),A.createElement(U,null,A.createElement(J,null,A.createElement("a",{href:"https://open.spotify.com/track/"+n.src.track_id,target:"_blank"},n.src.song)),A.createElement(W,null,A.createElement(T,null,"by ",n.src.artist)),A.createElement(W,null,A.createElement(T,null,"on ",n.src.album)))))},X=e(2960),H=S.ZP.div(m||(m=(0,j.Z)(["\n    display: flex;\n    flex-direction: row;\n    margin-top: 15px;\n    min-height: 45px;\n"]))),q=S.ZP.div(h||(h=(0,j.Z)(["\n    padding: 5px;\n"]))),_=S.ZP.div(y||(y=(0,j.Z)([""]))),V=S.ZP.div(w||(w=(0,j.Z)(["\n    float: left;\n    position: relative;\n    display: inline;\n"]))),K=S.ZP.img(x||(x=(0,j.Z)(["\n    height: 48px;\n    border-radius: 5px;\n"]))),$=S.ZP.div(E||(E=(0,j.Z)(["\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    bottom: 5%;\n    right: 0;\n\n    &:before {\n        content: '';\n        position: relative;\n        display: block;\n        box-sizing: border-box;\n        width: 300%;\n        height: 300%;\n        margin-left: -100%;\n        margin-top: -100%;\n        border-radius: 45px;\n        background: ",";\n        animation: "," 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;\n    }\n\n    &:after {\n        z-index: 1000;\n        content: '';\n        position: absolute;\n        display: block;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background: ",";\n        border-radius: 15px;\n        box-shadow: 0 0 8px rgba(0,0,0,.3);\n        animation: "," 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;\n    }\n"])),(function(n){return n.statusColor}),Y,(function(n){return n.statusColor}),z),nn=S.ZP.span(P||(P=(0,j.Z)(["\n    position: relative;\n    margin-left: 10px;\n"]))),tn=S.ZP.div(I||(I=(0,j.Z)(["\n    position: relative;\n    display: block;\n"]))),en=S.ZP.span(Z||(Z=(0,j.Z)(["\n    color: ",";\n    margin-left: 10px;\n"])),(function(n){return n.statusColor})),rn=function(){var n=A.useState(null),t=n[0],e=n[1];return A.useEffect((function(){var n=new X.w3cwebsocket("wss://api.lanyard.rest/socket");return n.onopen=function(){console.log("Presence websocket connected")},n.onmessage=function(t){if("string"==typeof t.data){var r=JSON.parse(t.data);if(0===r.op)e(r.d);else if(1===r.op){var o=JSON.stringify({op:2,d:{subscribe_to_id:"660292639412846621"}});n.send(o),setInterval((function(){console.log("HB");var t=JSON.stringify({op:3});n.send(t)}),r.d.heartbeat_interval)}}},function(){return n.close()}}),[]),A.createElement(A.Fragment,null,A.createElement(O.q,null,A.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),A.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),A.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap",rel:"stylesheet"}),A.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),A.createElement("title",null,"EmeraldSys | About")),A.createElement(k.Z,null),A.createElement(D,{title:"Howdy!",description:"I am a freelance developer, learning and working on many projects and also contributing to some. I founded EmeraldSys back in 2018 to build a structure that will support my ongoing projects."},t&&A.createElement(H,null,A.createElement(q,null,A.createElement(_,null,A.createElement(V,null,A.createElement(K,{src:"https://cdn.discordapp.com/avatars/"+t.discord_user.id+"/"+t.discord_user.avatar+".png"}),A.createElement($,{statusColor:"var(--presence-"+t.discord_status+")"})),A.createElement(nn,null,t.discord_user.username,"#",t.discord_user.discriminator),A.createElement(tn,null,A.createElement(en,{statusColor:"var(--presence-"+t.discord_status+")"},t.discord_status)))),t.listening_to_spotify&&A.createElement(Q,{src:t.spotify}))))}},9794:function(n){"use strict";n.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=component---src-pages-about-js-e3d328bbf1624bf23bdf.js.map